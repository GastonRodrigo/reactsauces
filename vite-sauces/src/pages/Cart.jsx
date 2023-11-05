import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Carrito = () => {
  const { cart, precioTotal, vaciarCarrito } = useContext(CartContext);

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
    <h2>PRECIO TOTAL: ${precioTotal()}</h2>
    <button onClick={handleVaciar}>Vaciar</button>
    </div>
  )
}
export default Carrito
