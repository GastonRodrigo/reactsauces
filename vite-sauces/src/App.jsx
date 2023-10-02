
import './App.css';
import Header from './components/Header/Navbar';
import ItemListContainer from './components/Items/ItemListContainer';
import Box from "@mui/material/Box";
import Footer from './components/Footer/Footer'
import { Grid } from "@mui/material";


function App() {
  return (

    <>
    
      <Header/>

      <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: '10px',
            my: 2,
          }}
        >
          
          <Grid container spacing={0} justifyContent="center">
      
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
      <ItemListContainer 
        name='Té Heredia Gengibre'
        img='/src/components/Items/img/heredia-gengibre.png'
        description='Té natural organico'
        price='$1330'
      />
      <ItemListContainer 
        name='Crakines'
        img='/src/components/Items/img/crakines.jpeg'
        description='Tostaditas de arroz'
        price='$610'
      />
      <ItemListContainer 
        name='Yogurt Quimya Arandanos'
        img='/src/components/Items/img/quimya-arandanos.png'
        description='A base de coco, sabor arandanos'
        price='$680'
      />
      <ItemListContainer 
      name='Yogurt Quimya Pistacho'
        img='/src/components/Items/img/quimya-pistacho.jpeg'
        description='A base de coco y pistachos'
        price='$750'
      />
        </Grid>
    
      </Box>
      <Footer />
    </>
  )
}

export default App
