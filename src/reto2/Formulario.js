import { useState, createContext, useContext, useEffect } from "react";
import { guardarUsuario,editarUsuario } from './UsuarioServicio'
const Formulario = ({user,update}) => {

    const [idUsuario, setIdUsuario] = useState('');
    const [nroIdUsuario, setNroIdUsuario] = useState('');
    const [nameUsuario, setNameUsuario] = useState('');
    const [dirUsuario, setDirUsuario] = useState('');
    const [celUsuario, setCelUsuario] = useState('');
    const [emailUsuario, setEmailUsuario] = useState('');
    const [passwordUsuario, setPasswordUsuario] = useState('');
    const [zonaUsuario, setZonaUsuario] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [validar, setValidar] = useState([])
    const [mensaje,setMensaje] = useState("")
    const [titulo,setTitulo] = useState("")
    const [btnText,setBtnText] = useState("")

    useEffect(()=>{
            setMensaje("")
            setIdUsuario(user.id)
            setNroIdUsuario(user.identification)
            setNameUsuario(user.name)
            setDirUsuario(user.address)
            setCelUsuario(user.cellPhone)
            setEmailUsuario(user.email)
            setPasswordUsuario(user.password)
            setZonaUsuario(user.zone)
            setTipoUsuario(user.type)
            console.log("formulario obj "+user)
            if(update){
                setTitulo("Editar Usuario")
                setBtnText("Editar")
            }
            else{
                   setTitulo("Registrar Usuario")
                setBtnText("Guardar")
            }

    },[user])

 

    const validarEntrada = () => {
        let errores = []
        if (idUsuario === "") {
            errores.push("*Campo Id Vacio")
        }
        if (nroIdUsuario === "") {
            errores.push("*Campo Identificacion Vacio")
        }
        if (nameUsuario === "") {
            errores.push("*Campo Name Vacio")
        }
        if (dirUsuario === "") {
            errores.push("*Campo Direccion Vacio")
        }
        if (celUsuario === "") {
            errores.push("*Campo Celular Vacio")
        }
        if (emailUsuario === "") {
            errores.push("*Campo Email Vacio")
        }
        if (passwordUsuario === "") {
            errores.push("*Campo Password Vacio")
        }
        if (zonaUsuario === "") {
            errores.push("*Campo Zona Vacio")
        }
        if (tipoUsuario === "") {
            errores.push("*Campo Tipo Usuario Vacio")
        }
        setValidar(errores)
    }

    const handleChange = event => {
        const target = event.target
        if (target.name === 'idUsuario') {
            setIdUsuario(event.target.value)
        }
        if (target.name === 'nroIdUsuario') {
            setNroIdUsuario(event.target.value)
        }
        if (target.name === 'nameUsuario') {
            setNameUsuario(event.target.value)
        }
        if (target.name === 'dirUsuario') {
            setDirUsuario(event.target.value)
        }
        if (target.name === 'celUsuario') {
            setCelUsuario(event.target.value)
        }

        if (target.name === 'emailUsuario') {
            setEmailUsuario(event.target.value)
        }
        if (target.name === 'passwordUsuario') {
            setPasswordUsuario(event.target.value)
        }
        if (target.name === 'zonaUsuario') {
            setZonaUsuario(event.target.value)
        }
        if (target.name === 'tipoUsuario') {
            setTipoUsuario(event.target.value)
        }
       
    }


    

    const limpiar=()=>{
            setIdUsuario("")
            setNroIdUsuario("")
            setNameUsuario("")
            setDirUsuario("")
            setCelUsuario("")
            setEmailUsuario("")
            setPasswordUsuario("")
            setZonaUsuario("")
            setTipoUsuario("")
    }

    const cancelar=(event)=>{
        event.preventDefault()
        console.log("cancelar")
        limpiar()
    }
    
    const guardar=(usuario)=>{
        guardarUsuario(usuario).then(({status}) => {
            if(status === 201){
                setMensaje("Registro Guardado con Exito!!")
                limpiar()
            }
        })
            .catch(error => {
                console.log(error)
        })
    }

    const editar=(usuario)=>{
        editarUsuario(usuario).then(({status}) => {
            if(status === 201){
                setMensaje("Registro Editado con Exito!!")
            }
        })
            .catch(error => {
                console.log(error)
        })
    }


    const addUser = (event) => {
        setMensaje("")
        event.preventDefault()
        let usuario = {
            id: idUsuario,
            identification: nroIdUsuario,
            name: nameUsuario,
            address: dirUsuario,
            cellPhone: celUsuario,
            email: emailUsuario,
            password: passwordUsuario,
            zone: zonaUsuario,
            type: tipoUsuario
        }
        console.log(usuario)
        validarEntrada()
        console.log("tam validar "+validar.length)
        if(validar.length === 0){
            console.log(" entro a validar.length")
          if(update){
            editar(usuario)
          }
          else{
            guardar(usuario)
          }
          
        }    
    }

    const cerrarMensaje = ()=>{
        setValidar([])
        setMensaje("")
        
    }

    return (
        <>

            <div className='container mt-5'>
                {
                     (mensaje.length > 0) &&
                     <div id="alerta" className="alert alert-success alert-dismissible" onClick={cerrarMensaje}>
                         <button type='button' className='btn-close' id="cerrar"></button>
                         <div>
                             <ul>
                                {mensaje}
                             </ul>
                         </div>
                     </div>
 
                }
                {
   (validar.length > 0) &&
                    <div id="alerta" className="alert alert-danger alert-dismissible" onClick={cerrarMensaje}>
                        <button type='button' className='btn-close' id="cerrar"></button>
                        <div>
                            <ul>
                                {validar.map((v) => <li>{v}</li>)}
                            </ul>
                        </div>
                    </div>
                }
                <form>
                    <div></div>
                    <h3>{titulo}</h3>
                    <div className="row">
                        <div className="col-2">
                            <div className="form-group">
                                <label className="form-label" htmlFor="idUsuario">Id</label>
                                <input type="text" id='idUsuario' name='idUsuario' autoFocus
                                    onChange={handleChange} value={idUsuario}
                                    className={(((idUsuario === "")) && (validar.length > 0)) ? "form-control is-invalid" : "form-control"} />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label className="form-label" htmlFor="nroIdUsuario">Identificación</label>
                                <input type="text" id='nroIdUsuario'
                                    name='nroIdUsuario' onChange={handleChange} value={nroIdUsuario}
                                    className={((nroIdUsuario === "") && (validar.length > 0)) ? "form-control is-invalid" : "form-control"}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label className="form-label" htmlFor="nameUsuario">Nombre</label>
                                <input type="text" id='nameUsuario'
                                    name='nameUsuario' onChange={handleChange} value={nameUsuario}
                                    className={((nameUsuario === "") && (validar.length > 0)) ? "form-control is-invalid" : "form-control"} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label className="form-label" htmlFor="dirUsuario">Dirección</label>
                                <input type="text" id='dirUsuario'
                                    name='dirUsuario' onChange={handleChange} value={dirUsuario}
                                    className={((dirUsuario === "") && (validar.length > 0)) ? "form-control is-invalid" : "form-control"} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label className="form-label" htmlFor="celUsuario">Celular</label>
                                <input type="tel" id='celUsuario'
                                    className={((celUsuario === "") && (validar.length > 0)) ? "form-control is-invalid" : "form-control"}
                                    name='celUsuario' onChange={handleChange}  value={celUsuario}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label className="form-label" htmlFor="emailUsuario">Email</label>
                                <input type="email" id='emailUsuario'
                                    name='emailUsuario' onChange={handleChange} value={emailUsuario}
                                    className={((emailUsuario === "") && (validar.length > 0)) ? "form-control is-invalid" : "form-control"}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label className="form-label" htmlFor="passwordUsuario">Password</label>
                                <input type="password" id='passwordUsuario'
                                    name='passwordUsuario' onChange={handleChange} value={passwordUsuario}
                                    className={((passwordUsuario === "") && (validar.length > 0)) ? "form-control is-invalid" : "form-control"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label className="form-label" htmlFor="zonaUsuario">Zona</label>
                                <input type="text" id='zonaUsuario'
                                    name='zonaUsuario' onChange={handleChange} value={zonaUsuario}
                                    className={((zonaUsuario === "") && (validar.length > 0)) ? "form-control is-invalid" : "form-control"} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label className="form-label" htmlFor="tipoUsuario">Tipo</label>
                                <input type="text" id='tipoUsuario' value={tipoUsuario}
                                    name='tipoUsuario' onChange={(handleChange)}
                                    className={((tipoUsuario === "") && (validar.length > 0)) ? "form-control is-invalid" : "form-control"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 mb-3 text-center">
                        <div className="col">
                            <button className="btn btn-outline-primary" onClick={addUser} >{btnText}</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-outline-secondary" onClick={cancelar} >Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Formulario