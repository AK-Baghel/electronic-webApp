import Header from "./component/header/Header"
import Home from "./component/home/Home"
import About from "./component/about/About"
import LineCard from "./component/lineCard/LineCard"
import Footer from "./component/footer/Footer"
import Contact from "./component/contact/Contact"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import '@coreui/coreui/dist/css/coreui.min.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lineCard" element={<LineCard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
