import Navbar from './Components/Navbar/Navbar'
import './App.css'
import ItemListContainer from './Components/ItemListContainer'
;

const App = () => {
  return (
    <>
    <Navbar />

    <ItemListContainer 
    textoRandom='Texto Random para mostrar'
    />

    </>

  )
}

export default App;
