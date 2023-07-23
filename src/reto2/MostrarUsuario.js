import React, { useEffect } from 'react'
import { getApiUsuarios} from './UsuarioServicio'
import { useState } from 'react'
import FormularioMod from './Formulario'
import FormEliminar from './FormEliminar'

const MostrarUsuario = () => {
    let usuario = {
        id: "",
        identification: "",
        name: "",
        address: "",
        cellPhone: "",
        email: "",
        password: "",
        zone: "",
        type: ""
    }
    const [users, setUsers] = useState(null)
    const [user, setUser] = useState(usuario)
    const [actualizar, setActualizar] = useState(false)
    const [mensaje, setMensaje] = useState("")
    const [idEliminar, setIdEliminar] = useState(null)

    const getUsuarios = () => {
        getApiUsuarios().then(({ data, length }) => {
            setUsers(data)
            console.log(data)
            console.log(data.length)
        })
            .catch(error => {

            })
    }

    /*
        useEffect(()=>{
            setUser(usuario)
            console.log(usuario)
        },[])
    */
    const verUsuario = (event, userobj) => {
        event.preventDefault()
        console.log(userobj)
        setUser(userobj)
        setActualizar(true)
    }

    const verEliminar = (event, userobj) => {
        event.preventDefault()
        console.log(userobj)
        setIdEliminar(userobj.id)
    }

    const eventoGuardar = (event) => {
        event.preventDefault()
        setUser({
            id: "",
            identification: "",
            name: "",
            address: "",
            cellPhone: "",
            email: "",
            password: "",
            zone: "",
            type: ""
        })
        setActualizar(false)
    }


    useEffect(() => {
        getUsuarios()
    }, [])

    const cerrarModal = () => {
        getUsuarios()
        setMensaje("")
    }

    return (
        <>
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Modal Heading</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            {

                                <FormularioMod user={user} update={actualizar} />

                            }
                        </div>

                        <div class="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={cerrarModal}>Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>


            <div class="modal" id="myModalElim">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Modal Heading</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            {
                                
                              (idEliminar!=null) &&  
                                 <FormEliminar id={idEliminar}/>
                            }
                        </div>

                        <div class="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={cerrarModal}>Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <h1 className='text-center'>Mostrar Usuarios</h1>




                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal" onClick={eventoGuardar}>
                    Guardar
                </button>






                {
                    users === null ?
                        <p>Cargando.......</p>
                        :
                        users.length === 0 ?
                        <div id="alerta" className="alert alert-success alert-dismissible mt-5" >
                        <div>
                          <p>Registro Vacio</p>
                        </div>
                    </div>
                            :
                            <table className='table table-striped text-center'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Indentification</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>CellPhone</th>
                                        <th>Email</th>
                                        <th>Zone</th>
                                        <th>Type</th>
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, key) => {
                                            return <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.identification}</td>
                                                <td>{user.name}</td>
                                                <td>{user.address}</td>
                                                <td>{user.cellPhone}</td>
                                                <td>{user.email}</td>
                                                <td>{user.zone}</td>
                                                <td>{user.type}</td>
                                                <td>
                                                    <button onClick={e => { verUsuario(e, user) }} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Editar</button>
                                                    &nbsp;
                                                    <button onClick={e => { verEliminar(e, user) }} type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModalElim">Eliminar</button>
                                                </td>
                                 
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                }
            </div>
        </>
    )
}

export default MostrarUsuario