import React, { useEffect, useState } from 'react'
import { eliminarUsuario } from './UsuarioServicio'
const FormEliminar = ({id}) => {

    const [mensaje, setMensaje] = useState("")

    useEffect(()=>{
        setMensaje("")
    },[id])

    const eliminar = (event) => {
        event.preventDefault()
        console.log("eliminar")
        eliminarUsuario(id).then(({ status }) => {
            if (status === 204) {
                setMensaje("Registro Eliminado con Exito!!")
            }
        })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
        <form>
                <div className='container mt-5'>
                {
                    (mensaje.length > 0) ?
                        <div id="alerta" className="alert alert-success alert-dismissible" >
                            <button type='button' className='btn-close' id="cerrar"></button>
                            <div>
                                <ul>
                                    {mensaje}
                                </ul>
                            </div>
                        </div>

                        :
                        <div>
                            <h1 className='text-center'>Desea Eliminar Usuario?</h1>
                            <div className='text-center'>
                                <button className='btn btn-warning ml-1' >NO</button>
                                &nbsp;
                                <button className='btn btn-danger' onClick={eliminar}>SI</button>
                          
                            </div>
                        </div>

                }

            </div>
        </form>    
        </>
    )
}


export default FormEliminar