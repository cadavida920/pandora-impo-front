import React from 'react'
import { Dropdown } from 'react-bootstrap';
import formatColombianPesos from '../../services/currency';
import { useState } from 'react';
import EditarProductoModal from './EditarProductoModal';
import {AiFillEdit} from "react-icons/ai";

function ProductoItem({ product, actualizarProductosHandler, index }) {
    const [showModal, setShowModal] = useState(false);

    
    const handleEdit = () => {
        setShowModal(true);
    };
    return (
        <>
            <EditarProductoModal
                show={showModal}
                setShow={setShowModal}
                producto={product}
                actualizarProductosHandler={actualizarProductosHandler}>
            </EditarProductoModal>

            <tr key={index}>
                <td>{product.id}</td>
                <td>{product.cliente.nombre}</td>
                <td>{product.descripcionProducto}</td>
                <td>{product.cantidad}</td>
                <td>{formatColombianPesos(product.costo)}</td>
                <td>{formatColombianPesos(product.impuesto)}</td>
                <td>{formatColombianPesos(product.costoEnvio)}</td>
                <td>{formatColombianPesos(product.precioVenta)}</td>
                <td>{formatColombianPesos(product.valorRestante)}</td>
                <td>{product.descripcionEstadoEnvio}</td>
                <td>{product.estadoPago}</td>
            
                <td>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">
                            <i className="bi bi-three-dots"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item  onClick={handleEdit}> <AiFillEdit/> Editar</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr>
        </>
    )
}

export default ProductoItem
