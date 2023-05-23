import './App.css';
import CrearUsuario from './components/usuarios/CrearUsuario';
import CrearProducto from './components/productos/CrearProducto';
import React from 'react';
import ProductosManager from './components/productos/ProductosManager';
import AgregarDepositos from './components/AgregarDepositos';
import { BrowserRouter as Router , Route, Routes} from "react-router-dom";
import ConsultarProductoPorCliente from './components/productos/ConsultarProductoPorCliente';
import ConsultarProductoPorId from './components/productos/BuscarProductoPorId';
import BuscarTodosClientes from './components/BuscarTodosClientes';
import BuscarDepositoCliente from './components/BuscarDepositoCliente';
import ActualizarProducto from './components/productos/ActualizarProducto';
import Header from './components/Header';







function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<ProductosManager></ProductosManager>}/>
          <Route path='producto' element={<CrearProducto></CrearProducto>}/>
          <Route path='/usuario' element={<CrearUsuario />}/>
          <Route path='/deposito' element={<AgregarDepositos></AgregarDepositos>}/>
          <Route path='/productos/cliente' element={<ConsultarProductoPorCliente></ConsultarProductoPorCliente>}/>

          <Route path='/productos/id' element={<ConsultarProductoPorId></ConsultarProductoPorId>}/>
          
          <Route path='/Buscar/todos/id' element={<BuscarTodosClientes></BuscarTodosClientes>}/>
          <Route path='/Buscar/Deposito/cliente' element={<BuscarDepositoCliente></BuscarDepositoCliente>}/>
          <Route path='/actualizar/producto' element={<ActualizarProducto></ActualizarProducto>}/>

          
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;

