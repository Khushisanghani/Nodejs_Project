import AllProduct from "./Pages/AllProduct";
import Home from "./Pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";
import Admin from "./Pages/Admin";
import CartList from "./Pages/CartList";
// import './App.css';
// import Login from "./Pages/Login";

function App() {
  return (
    <>
    
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/allproduct" element={<AllProduct/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/admin" element={<Admin/>}/>
           <Route path="/cart" element={<CartList/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
        
        
    </>
  );
}

export default App;
