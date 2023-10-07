
interface Props {
  children: React.ReactNode
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {children}
    </div>
  )
}
