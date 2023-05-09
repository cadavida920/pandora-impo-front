import CrearUsuario from "../components/usuarios/CrearUsuario";

const BASE_URL = "http://localhost:8085";

const post = async(endpoint = "", data = {}) => {
    fetch(BASE_URL + endpoint, {
        method: 'POST',
        mode: "cors",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(
        response => {
            console.log(response);
            return response.json();
        }
    ).catch(error => {
        console.error(error);
    });
}

const get = async(endpoint = "") => {
    const response = await fetch(BASE_URL + endpoint)
    const data = response.json();
    return data;
}


const put = async(endpoint = "", data = {}) => {
    fetch(BASE_URL + endpoint, {
        method: 'PUT',
        mode: "cors",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(
        response => {
            console.log(response);
            return response.json();
        }
    ).catch(error => {
        console.error(error);
    });
}



export const CrearUsuarioPOST = (cliente) => {
    return post ("/cliente" , cliente);
}

export const crearProductoPOST = (producto) => {
    return post("/producto", producto);
}

export const obtenerProductoPorClienteGET = (clienteId) => {
    return get("/producto/clientes/" + clienteId);
}

export const actualizarProductoPUT = (producto) => {
    return put("/producto", producto);
}

export const consultarProductoPorIdGET = (id) => {
    return get("/producto/" + id);
}

export const buscarTodosClientesGET = () => {
    return get ("/cliente/all" );
}

export const crearDepositoClientePost = (deposito) => {
    return post ("/deposito", deposito);
}

export const buscarDepositoClienteGET = (id) => {
    return get ("/deposito/" + id );
}






