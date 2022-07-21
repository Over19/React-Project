import Navbar from './Components/Navbar/Navbar'
import './App.css'
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/Itemdetails/ItemDetailContainer';
import CartCustomProvider from './Components/CartContext';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import  Cart  from './Components/Cart';

const App = () => {
  return (
    <BrowserRouter>
    <CartCustomProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<ItemListContainer texto='Bienvenido'/>} />
      <Route path="/category/:categoryId" element={<ItemListContainer texto='Bienvenido'/>} />
      <Route path="/product/:productId" element={<ItemDetailContainer />} />
      <Route path="/Cart" element={<Cart />}/>
    </Routes>
    </CartCustomProvider>


</BrowserRouter>
    

  )
}

export default App;
