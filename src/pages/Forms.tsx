import { InputFileDragAndDrop } from "../components/forms/InputFileDragAndDrop"
import { Select } from "../components/forms/Select"

export const Forms = () => {
  return (
    <>
      <div>
        <h3 className='text-2xl font-bold'>Selects</h3>

        <Select
          label='Equipo'
          className='max-w-xs'
          defaultOption={{ label: 'Selecciona un equipo', value: '' }}
          options={[
            { label: 'Equipo azul', value: 'azul' },
            { label: 'Equipo verde', value: 'verde' },
            { label: 'Equipo blanco', value: 'blanco' },
          ]}
          onChange={(e) => console.log(e)}
        />
      </div>

      <div>
        <h3 className='font-bold uppercase'>Input File con Drag and Drop</h3>

        <InputFileDragAndDrop
          url=''
          onChange={(e) => console.log(e)}
        />
      </div>
    </>
  )
}
