import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';

const BuscadorID = ({title, setId}) => {
    const [identificador, setIdentificador] = useState();
      
    const handleSubmit = (event) => {
        event.preventDefault();
        setId(identificador);
      };

    return (
        <div>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="form-group" as={Row} controlId="formDijitevalorDeposito">
                    <Form.Label column sm={3}>{title}</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" value={identificador} onChange={(event) => setIdentificador(event.target.value)} />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit" className='small-button'>
                    Buscar
                </Button>
            </Form>
        </div>
    )
}

export default BuscadorID;
