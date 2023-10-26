import Header from "./component/header/Header"
import Home from "./component/home/Home"
import About from "./component/about/About"
import LineCard from "./component/lineCard/LineCard"
import Footer from "./component/footer/Footer"
import Contact from "./component/contact/Contact"
import Dashboard from "./dashboard/Dashboard"
import ProductPage from "./component/products/productPage/ProductPage"
import ErrorPage from "./component/errorPage/ErrorPage"

import PrivateComponent from "./component/privateComponent/PrivateComponent"
import Mental from "./dashboard/Mental"
import LoginDashboard from "./dashboard/loginDashboard/LoginDashboard"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import '@coreui/coreui/dist/css/coreui.min.css'
import { useLocation } from "react-router-dom"
import { useState } from "react"

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [login, setlogin] = useState(true)
  console.log("heello", login);

  return (
    <>
      {
        location.pathname !== "/dashboard" && location.pathname !== "/mental" ?
          <>
            <Header />
            <Routes>
              <Route element={<PrivateComponent />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/lineCard" element={<LineCard />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:name" element={<ProductPage />} />
              </Route>
              <Route path="*" element={<ErrorPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/mental" element={<Mental />} />
            </Routes>
            <Footer />
          </>
          :
          <>
            {
              login &&
              <>
                <LoginDashboard/>
                <button onClick={() => { setlogin(!login); }}>Login</button>
              </>
            }


            {login === false &&
              <>
                <h1 style={{ backgroundColor: "red", color: "white" }}>NAVBAR</h1>
              </>
            }

            <Routes>
              {login === false &&
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/mental" element={<Mental />} />
                </>
              }
            </Routes>
          </>
      }
    </>
  )
}

export default App
