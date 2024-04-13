import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Add from "./pages/Add.jsx"
import Delete from "./pages/Delete.jsx"
import Edit from './pages/Edit.jsx'
import ShowBlog from "./pages/ShowBlog.jsx"
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
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/show/:id" element={<ShowBlog />} />
        </Routes>
      </BrowserRouter>

    </body>
  )
}

export default App
