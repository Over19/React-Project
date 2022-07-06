import Navbar from './Components/Navbar/Navbar'
import './App.css'
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/Itemdetails/ItemDetailContainer';

const App = () => {
  return (
    <>
    <Navbar />

    <ItemListContainer 
    textoRandom='Productos en stock'
    />

    <ItemDetailContainer />

    </>

  )
}

export default App;
