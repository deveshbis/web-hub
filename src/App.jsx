import { Outlet } from "react-router-dom"

import NavBar from "./component/Pages/NavBar/NavBar"
import Footer from "./component/Footer/Footer"



function App() {


  return (
    <>
      <div>
        <div className=" h-16">
          <NavBar></NavBar>
        </div>
        <div className="min-h-[calc(100vh-116px)]">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>


    </>
  )
}

export default App
