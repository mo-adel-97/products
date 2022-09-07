import './App.css';
import { Routes, Route,BrowserRouter  } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NavBar from './components/NavBar';
import List from './Pages/Products';
function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/products' element={< List/>} />
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
