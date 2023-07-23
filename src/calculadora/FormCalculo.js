import React, { useState } from 'react'
import {suma,resta} from './Calculo'
import './calculadora.css'
const FormCalculo = () => {
    const [n1,setN1] = useState("")
    const [n2,setN2] = useState("")
    const [calc,setCalc] = useState("Valor Suma")
    const [opcion,setOpcion] = useState("seleccione")
    const [validar,setValidar]  = useState([])

 const handleChange = event=>{
    const target = event.target
    if(target.name === 'n1'){
      setN1(event.target.value)
    }
    else if(target.name === 'n2'){
      setN2(event.target.value)
    }    
    else if(target.name === 'op'){
      setOpcion(event.target.value)
    }
 }   

 const validarEntrada=()=>{
      let errores = []
      if(n1 === ""){
         errores.push("*Campo N1 Vacio")
      }
      if(n2 === ""){
         errores.push("*Campo N2 Vacio")
      }
      if(opcion === "seleccione"){
         errores.push("*No se ha Escogido Operacion")
      }
      setValidar(errores)
 }

 const calculoAritmetico = (event)=>{
      let calculo = 0
      event.preventDefault()
      validarEntrada()
      if(opcion === 'suma'){
         calculo = suma(parseInt(n1),parseFloat(n2))
      }
      else if(opcion === 'resta'){
         calculo = resta(parseInt(n1),parseFloat(n2))
      }

      setCalc(calculo)
 }  
 return (
        <>
          <div className="container">
           { 
               (validar.length>0)  &&
               <div id="alerta" className="alert alert-danger alert-dismissible">
                     <button type='button' className='btn-close' id="cerrar"></button>
                     <div>
                        <ul>
                           {validar.map((v) => <li>{v}</li> )}   
                        </ul>
                     </div>
               </div> 
          } 

               <form>
                     <h2 className='text-center'>Calculo de la Suma</h2>
                     <label>N1</label>
                     <input type="number" id="n1" name="n1" value={n1}  
                      onChange={handleChange}
                      className={((n1==="") && (validar.length>0))?"form-control is-invalid":"form-control"}
                      /> 
                     <label>N2</label>
                     <input type="number" id="n2" name="n2" value={n2}   
                     onChange={handleChange}
                     className={((n2==="") && (validar.length>0))?"form-control is-invalid":"form-control"}
                     /> 
                     <label>Operacion</label>
                     <select id="op" name="op"
                      onChange={handleChange}
                      className={((opcion==="seleccione") && (validar.length>0))?"form-control is-invalid":"form-control"}
                      >
                           <option value="seleccione">Seleccione</option>
                           <option value="suma">Suma</option>
                           <option value="resta">Resta</option>
                     </select>
                        <p>Suma:{calc}</p>    
                     <div className='text-center'>
                        <button class="btn btn-primary" onClick={calculoAritmetico}>Calculo</button>
                     </div>
               </form>
         </div>
        </>
  )
}
export default FormCalculo