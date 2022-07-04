import Navbar from './Components/Navbar/Navbar'
import './App.css'
import ItemListContainer from './Components/ItemListContainer'
;

const App = () => {
  return (
    <>
    <Navbar />

    <ItemListContainer 
    textoRandom='Productos en stock'
    />

    </>

  )
}

export default App;
