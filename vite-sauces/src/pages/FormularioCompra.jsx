import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const FormularioCompra = () => {
  let { cart } = useContext (CartContext);
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [medioPago, setMedioPago] = useState('');
  const [compraProcesada, setCompraProcesada] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Dirección:', direccion);
    console.log('Teléfono:', telefono);
    console.log('Medio de Pago:', medioPago);
    setTimeout(() => {
        setCompraProcesada(true);
        //CARRITO DE COMPRA REDIRIGIENDO A WHATSAPP (MAS SENCILLO PARA EL NEGOCIO QUE TENGO)
        let mensajeWhatsApp = `Hola, he realizado una compra con los siguientes datos:\n\nNombre: ${nombre}\nDirección: ${direccion}\nTeléfono: ${telefono}\nMedio de Pago: ${medioPago}\n\nProductos Comprados:\n`;

        cart.forEach((producto) => {
          mensajeWhatsApp += `${producto.name} - Precio: ${producto.price} - Cantidad: ${producto.cantidad}\n`;
        });
    const enlaceWhatsApp = `https://wa.me/5491156436110?text=${encodeURIComponent(mensajeWhatsApp)}`;

      window.location.href = enlaceWhatsApp;
    }, 1000);
  }

  return (
    <div className="container">
      <h1 className="main-title">Finalizar Compra</h1>
      {!compraProcesada ? (
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
          <br />
          <label>
            Dirección:
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </label>
          <br />
          <label>
            Teléfono:
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </label>
          <br />
          <label>
            Medio de Pago:
            <select
              value={medioPago}
              onChange={(e) => setMedioPago(e.target.value)}
            >
              <option value="">Seleccionar Medio de Pago</option>
              <option value="efectivo">Efectivo</option>
              <option value="transferencia">Transferencia</option>
              <option value="mercadopago">MercadoPago</option>
            </select>
          </label>
          <br />
          <button type="submit">Confirmar Compra</button>
        </form>
      ) : (
        <div>
          <h2>Felicitaciones, su compra está siendo procesada</h2>
        </div>
      )}
    </div>
  );
}

export default FormularioCompra;
