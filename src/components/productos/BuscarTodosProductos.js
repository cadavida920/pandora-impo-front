import React, { Component, useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import { buscarTodosProductosGet } from '../../services/api';
import ProductoItem from './ProductoItem';


const BuscarTodosLosProductos = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        buscarTodosProductosGet(productos)
            .then(data => {
                setProductos(data);
                console.log(data)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const updateProductHandler = (producto) => {
        const productosActualizados = productos.map(p => {
            if (p.id === producto.id) {
                return producto;
            } else {
                return p;
            }
        });
        setProductos(productosActualizados);
    }

    return (
        <Container className='container-margin'>
            <h1>Buscar todos los productos</h1>
            <br /><br /><br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Descripción Producto</th>
                        <th>Cantidad</th>
                        <th>Costo</th>
                        <th>Impuesto</th>
                        <th>Costo Envío</th>
                        <th>Precio Venta</th>
                        <th>Valor Restante</th>
                        <th>Estado Envío</th>
                        <th>Estado Pago</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((product) => (
                        <ProductoItem 
                            product={product}
                            actualizarProductosHandler={updateProductHandler}>

                            </ProductoItem>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default BuscarTodosLosProductos;