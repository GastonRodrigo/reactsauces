// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Carrito = () => {
  const { cart, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {
        cart.map((prod) => (
          <div key={prod.id}>
          <h2>{prod.name}</h2>
          <p>Precio Unitario: {prod.price}</p>
          <p>Cantidad: {prod.cantidad}</p>
          <p>Precio total: {prod.price * prod.cantidad}</p>
          </div>
        ))
      }

    <button onClick={handleVaciar}>Vaciar</button>
    <Link to='/finalizar-compra'>
      <button>Finalizar Compra</button>
    </Link>
    </div>
  )
}
export default Carrito
