import { Route, Routes } from "react-router-dom"

import { RootLayout } from "./components/layout"
import { Forms, Home, Layouts, Tables } from "./pages"

const App = () => {
  return (
    <RootLayout>
      {/* <Outlet /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path='forms' element={<Forms />} />
        <Route path='layouts' element={<Layouts />} />
        <Route path='tables' element={<Tables />} />
      </Routes>
    </RootLayout>
  )
}

export default App
