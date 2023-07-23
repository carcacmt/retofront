/**
 * Autor Carlos Caceres ochoa
 */
//liberia Axios
import Axios from 'axios'
//endpoint en servidor de pruebas
const port = "8090"
const endpoint =`http://localhost:${port}/api/user`
/**funcion para consumir todos los usuarios */
const getApiUsuarios=()=>{
    return Axios.get(endpoint+"/all")
}

const guardarUsuario=(user)=>{
    console.log(endpoint+"/new")
    return Axios.post(endpoint+"/new",user)
}
const editarUsuario=(user)=>{
    console.log(endpoint+"/update")
    return Axios.put(endpoint+"/update",user)
}

const eliminarUsuario=(id)=>{
    return Axios.delete(endpoint+"/"+id)
}
/**
 * exportar la funcion getApiUsuarios para poder importarla desde
 * otros componentes y se pueda reutilizar
 */
export {getApiUsuarios,guardarUsuario,editarUsuario,eliminarUsuario}

