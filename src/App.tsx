import { Outlet } from "react-router-dom"
import { RootLayout } from "./components/layout"

const App = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  )
}

export default App
