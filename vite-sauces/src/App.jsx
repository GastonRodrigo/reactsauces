
import './App.css';
import Header from './components/Header/Navbar';
import ItemListContainer from './components/Items/ItemListContainer';
import Box from "@mui/material/Box";
import Footer from './components/Footer/Footer'

function App() {
  return (

    <>
    
      <Header/>

      <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            my: 2,
          }}
        >
          
          
      
      <ItemListContainer 
        name='Karnevil Felices Las Vacas'
        img='/src/components/Items/img/karnevil.png'
        description='Apto Vegano a base de Arvejas'
        price='$2350'
      />
      <ItemListContainer 
        name='NOTCO'
        img='/src/components/Items/img/NOTCO.jpg'
        description='Apto Vegano Hamburguesa Vegana'
        price='$2550'
      />
      <ItemListContainer 
        name='Provolone Felices Las Vacas'
        img='/src/components/Items/img/provolone.png'
        description='Apto Vegano a base Almendras y Castañas'
        price='$1500'
      />
      
      </Box>
      <Footer />
    </>
  )
}

export default App
