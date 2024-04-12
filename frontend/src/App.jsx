import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Add from "./pages/Add.jsx"
import Delete from "./pages/Delete.jsx"
import Edit from './pages/Edit.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <body className="max-w-4xl mx-auto">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add" element={<Add />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>

    </body>
  )
}

export default App
