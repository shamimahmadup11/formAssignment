import Form from "./Components/Form"
import Navbar from "./Components/Navbar"
import { createBrowserRouter , RouterProvider } from "react-router-dom"
import UserDetails from "./Components/UserDetails"
import { Children } from "react"

function App() {


  const router=createBrowserRouter([
    {
      path:"/",
      element:<>
      <Navbar/>
      <Form/>
      </>
    },
    {
      path:"/userdetail",
      element:<>
      <Navbar/>
      <UserDetails/>
      </>
    },
  ])
  return (
    <>
   <RouterProvider router={router}>
    {Children}
   </RouterProvider>

    </>
  )
}

export default App
