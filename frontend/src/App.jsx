import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  return (
    <body className="max-w-4xl mx-auto">
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
      
    </body>
  )
}

export default App
