import React, { useEffect, useState } from 'react'
import {suma,resta} from './Calculo'
const FormCalculo = () => {
    const [n1,setN1] = useState("Digite N1")
    const [n2,setN2] = useState("Digite N2")
    const [suma,setSuma] = useState("Valor Suma")

 const handleChange = event=>{
    const target = event.target
    console.log(target)
 }   

 useEffect(()=>{
   console.log("use Effect N1")
 },[n1])
    
  return (
        <>
             <form>
                <h2>Calculo de la Suma</h2>
                <label>N1</label>
                <input type="number" id="n1" name="n1" value={n1}    onChange={(e) => setN1(e.target.value)}/> 
                <label>N2</label>
                <input type="number" id="n2" name="n2" value={n2}  onChange={(e) => setN2(e.target.value)}/> 
                <p>Suma:{suma}</p>    
                
            </form>   
        
        </>
  )
}

export default FormCalculo