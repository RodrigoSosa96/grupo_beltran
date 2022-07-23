import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import { GlobalStyle } from "./components/styled/Global"
import { Main } from "./components/styled/Main"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

import Home from "./pages/home"
import Nosotros from "./pages/nosotros"
import Proyectos from "./pages/proyectos"
import Servicios from "./pages/servicios"
import Whatsapp from "./components/Whatsapp"

function App() {
  return (
    <>
      <GlobalStyle />
      <Router >
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/servicios" element={<Servicios />} />
          </Routes>
          <Whatsapp />
        </Main>
        <Footer/>
      </Router>
    </>
  )
}

export default App
