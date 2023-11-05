import React, {useState} from 'react'

const ItemCount = ( {cantidad, handleAgregar, handleRestar, handleSumar} ) => {

  return (
    <div>
        <div className="item-count">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount