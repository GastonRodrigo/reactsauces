import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState (carritoInicial);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = {...item, cantidad};

    const nuevoCarrito = [...cart];
    const estaEnElCarrito = nuevoCarrito.find((item) => item.id === itemAgregado.id);

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
      setCart (nuevoCarrito);
    } else {
      nuevoCarrito.push(itemAgregado);
      setCart (nuevoCarrito);
      
    }
  }

  const cantidadEnCarrito = () => {
    return cart.reduce (( acc, prod) => acc + prod.cantidad, 0);
  }

  const precioTotal = () => {
  return cart.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
}

  const vaciarCarrito = () => {
    setCart ([]);
  }

    useEffect (() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={ {cart, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}