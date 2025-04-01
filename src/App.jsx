import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router-dom"
export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path = "/home" element = {<Home />}></Route>
        <Route path = "/contact" element = {<Contact />}></Route>
        <Route path = "/about" element = {<About />}></Route>
      </Routes>
    </div>
  )
}
