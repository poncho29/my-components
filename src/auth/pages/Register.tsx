export const Register = () => {
  return (
    <form>
      <input
        type="text"
        name='fullName'
        placeholder='Nombre completo'
        value={''}
        onChange={() => { }}
      />

      <input
        type="number"
        name='dni'
        placeholder='Número de identificación'
        value={''}
        onChange={() => { }}
      />
    </form>
  )
}
