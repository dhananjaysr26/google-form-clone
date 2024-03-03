import { RouterProvider } from "react-router-dom"
import { AppRouter } from "./routes"
import Navbar from "./common/Navbar"


function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={AppRouter} />
    </>
  )
}

export default App
