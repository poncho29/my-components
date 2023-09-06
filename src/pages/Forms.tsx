import { InputFileDragAndDrop } from "../components/common/InputFileDragAndDrop"

export const Forms = () => {
  return (
    <div>
      <h3 className='font-bold uppercase'>Input File con Drag and Drop</h3>

      <InputFileDragAndDrop
        url=''
        onChange={(e) => console.log(e)}
      />
    </div>
  )
}
