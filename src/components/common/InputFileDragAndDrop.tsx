import { ChangeEvent, useRef, useState } from "react";

interface Props {
  onChange: (e: File) => void;
}

export const InputFileDragAndDrop = ({ onChange }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleFileClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const hanldeDeleteFile = () => {
    setFile(null);
    setFileName('');
    inputRef.current = null
  }

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    if (file) {
      setFileName(file[0].name);
      setFile(file[0]);
      onChange(file[0]);
    }
  }

  return (
    <div>
      <label htmlFor="inputFile">InputFile</label>
      
      {!file ? (
        <div
          onClick={handleFileClick}
          className="w-[120px] h-[120px] flex items-center justify-center rounded-xl cursor-pointer bg-slate-300"
        >
          <span>Subir Archivo</span>
        </div>
      ) : (
        <div>
          <span>{fileName}</span>
          <img src={URL.createObjectURL(file)} alt={fileName} />
          <button
            className='text-white px-6 py-2 rounded bg-rose-600 hover:bg-rose-500'
            onClick={hanldeDeleteFile}
          >
            Eliminar
          </button>
        </div>
      )}


      <input
        hidden
        type="file"
        ref={inputRef}
        onChange={handleUploadFile}
      />
    </div>
  )
}