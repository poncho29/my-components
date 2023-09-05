import { Sidebar } from "."

interface Props {
  children: React.ReactNode
}

export const RootLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      <Sidebar />

      <div className="w-full h-screen p-4 overflow-y-auto lg:grow">
        {children}
      </div>
    </div>
  )
}
