import React from 'react'
import CrearProducto from './CrearProducto';
import ActualizarProducto from './ActualizarProducto';

function ProductosManager() {
    return (
        <div>
            <h1>Administracion de Producto</h1>
            <CrearProducto></CrearProducto>
            <ActualizarProducto></ActualizarProducto>
        </div>
    )
}

export default ProductosManager
