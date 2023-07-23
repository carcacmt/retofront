import React, { useEffect, useState } from 'react'
import Resultado from './Resultado'
const EjercicioEfecto = () => {
  const [ndolar,setNdolar] = useState(0)
  const [peso,setPeso] = useState(0)
  const [euros,setEuros] = useState(0)

  useEffect(()=>{
        console.log("use Effect primer renderizado")
  },[])
  useEffect(()=>{
    const cop = parseInt(ndolar)*4000
    const euro =  ndolar * 0.89
    console.log("use Effect estado ndolar")
    setPeso(cop)
    setEuros(euro)

 },[ndolar])
  return (
    <>
        <form>
            <input name="ndolar" type='number' value={ndolar} onChange={(e)=>{setNdolar(e.target.value)}}/>
            <p>Numero de Dolar:{ndolar}</p>
            <p>Valor en Pesos:{peso}</p>
            <p>Valor en Euros:{euros}</p>
            <button>Calcular</button> 
            <hr/>
            <Resultado pesor={peso} dolarc={ndolar} euroc={euros}/>
            <Resultado pesor={peso+1} dolarc={ndolar+1} euroc={euros+1}/>
        </form>
    </>
  )
}
export default EjercicioEfecto