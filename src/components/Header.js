import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">PANDORA-IMPO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 

            <Nav.Link href="/manager">UsuarioManager</Nav.Link>

            <Nav.Link href="/Buscar/todos/id">BuscarTodosClientes</Nav.Link>

            <NavDropdown title="Depositos" id="basic-nav-dropdown">
            <NavDropdown.Item href="/deposito">Crear Deposito</NavDropdown.Item>
            <NavDropdown.Item href="/Buscar/Deposito/cliente">Buscar Deposito Clientes</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="/producto">Crear Producto </NavDropdown.Item>
            <NavDropdown.Item href="/actualizar/producto">Actualizar Producto</NavDropdown.Item>
            <NavDropdown.Item href="/productos/id">Buscar Producto Por Id</NavDropdown.Item>
            <NavDropdown.Item href="/productos/cliente">Consultar Producto Por Cliente</NavDropdown.Item>
            <NavDropdown.Item href="/">Buscar todos los productos</NavDropdown.Item>
          
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;