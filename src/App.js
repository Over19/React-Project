import Navbar from './Components/Navbar/Navbar'
import './App.css'
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/Itemdetails/ItemDetailContainer';

import {BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<ItemListContainer texto='Bienvenido'/>} />
      <Route path="/category/:categoryId" element={<ItemListContainer texto='Bienvenido'/>} />
      <Route path="/product/:productId" element={<ItemDetailContainer />} />
      {/* <Route /> */}
    </Routes>


</BrowserRouter>
    

  )
}

export default App;
