import { ChangeEvent, DragEvent, useRef, useState } from "react";

interface Props {
  url: string;
  label?: string;
  onChange: (e: File) => void;
}

export const InputFileDragAndDrop = ({url, label, onChange }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [fileName, setFileName] = useState('');
  const [dragging, setDragging] = useState(false);
  const [urlFile, setUrlFile] = useState<string | null>(url || null);

  const handleFileClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  const hanldeDeleteFile = () => {
    setUrlFile(null);
    setFileName('');
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    if (file) {
      setFileName(file[0].name);
      setUrlFile(URL.createObjectURL(file[0]));
      onChange(file[0]);
    }
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);

    const { files } = event.dataTransfer;

    if (files && files.length) {
      setFileName(files[0].name);
      setUrlFile(URL.createObjectURL(files[0]))
      onChange(files[0]);
    }
  }

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  }

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  }

  return (
    <div>
      {label && <label htmlFor="inputFile">{label}</label>}
      
      
      {!urlFile ? (
        <div
          onClick={handleFileClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`w-[120px] h-[120px] flex items-center justify-center border-2
            border-slate-500 border-dashed rounded-xl cursor-pointer bg-slate-300
            ${dragging && 'border-green-500'}
          `}
        >
          <span>Subir Archivo</span>
        </div>
      ) : (
        <div>
          <span>{fileName}</span>
          <img src={urlFile} alt={fileName} />
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