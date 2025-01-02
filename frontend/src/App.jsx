import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Product from './pages/Product';
import Contact from './pages/Contact';
import About from './pages/About';
import PlaceOrder from './pages/PlaceOrder';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';
import Verify from './pages/verify';


const App = () => {
  
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar />
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Orders" element={<Orders/>} />
        <Route path="/Product/:productId" element={<Product/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/place-order" element={<PlaceOrder/>} />
        <Route path='/verify' element={<Verify/>}></Route>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App;