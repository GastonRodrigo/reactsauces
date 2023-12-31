
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import { CartProvider } from './context/CartContext';

//PAGES
import Home from './pages/Home';
import Contact from './pages/Contact';
import Category from './pages/Category';
import Cart from './pages/Cart'; 
import DetailPage from './pages/DetailPage';
import FormularioCompra from './pages/FormularioCompra';
// SPA = Simple Page Application (REACT)
// CONTEXTO


function App() {


  return (
    <CartProvider>
    <Router>
      <>
      
    <div className='App'>
      
        <Header/>

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path="/category/:category" element={<Category />} />
          {/* <Route path="/items" element={<ItemDetailContainer />} /> */}
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/finalizar-compra' element={ <FormularioCompra />} />
        </Routes>
        

        <Footer />
      
      </div>
      </>
      </Router>
      </CartProvider>
  )
}


export default App
