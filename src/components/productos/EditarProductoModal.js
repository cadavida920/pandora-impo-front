import { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { actualizarProductoPUT } from "../../services/api";
import AiFillEdit from "react-icons/ai"


function EditarProductoModal({ show, setShow, producto, actualizarProductosHandler }) {

  const [nombre, setNombre] = useState(producto.cliente.nombre);
  const [cantidad, setCantidad] = useState(producto.cantidad);
  const [descripcion, setDescripcion] = useState(producto.descripcionProducto);
  const [estadoEnvio, setEstadoEnvio] = useState(producto.codigoEstadoEnvio);
  
  

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const json = {
      id: producto.id,
      estadoEnvio: estadoEnvio,
    }

    actualizarProductoPUT(json)
      .then(data => {
        actualizarProductosHandler(data);
        setEstadoEnvio("");
        setShow(false);
      });
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            <Form.Group className="form-group" as={Row} controlId="formNombre">
              <Form.Label column sm={3}>Nombre:</Form.Label>
              <Col sm={9}>
                <Form.Label>{nombre}</Form.Label>
              </Col>
            </Form.Group>

            <Form.Group className="form-group" as={Row} controlId="formDescripcion">
              <Form.Label column sm={3}>Descripción:</Form.Label>
              <Col sm={9}>
                <Form.Label>{descripcion}</Form.Label>
              </Col>
            </Form.Group>


            <Form.Group className="form-group" as={Row} controlId="formCantidad">
              <Form.Label column sm={3}>Cantidad:</Form.Label>
              <Col sm={9}>
                <Form.Label>{cantidad}</Form.Label>
              </Col>
            </Form.Group>


            <Form.Group className="form-group" as={Row} controlId="forEstadoEnvio">
              <Form.Label column sm={3}>EstadoEnvio:</Form.Label>
              <Col sm={9}>
                <Form.Select value={estadoEnvio} onChange={(event) => setEstadoEnvio(event.target.value)}>
                  <option value="">Seleccionar</option>
                  <option value="PC">En proceso de compra</option>
                  <option value="ETC">En tránsito a Colombia</option>
                  <option value="EB">En bodega</option>
                  <option value="LPE">Listo para enviar</option>
                  <option value="ENTREGADO">Entregado</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Button  variant="primary" type="submit">
              Actualizar Producto
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditarProductoModal;
