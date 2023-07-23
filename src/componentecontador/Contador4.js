import React from 'react'
import { useState } from 'react'

const Contador = () => {
const [counter,setCounter] = useState(1)


const votar=()=>{
   setCounter(counter+1)
  }
  return (
    <>
      <div>Valor del Contador {counter}
      <div>
          {counter>1 ?
          <>
            <p>Gracias por Su Voto</p>
          </>
          :
          <>
            <p>Votar</p>     
            <button onClick={votar}>Votar</button>
          </>
         }
         
      </div>
      </div>
    </>
  )
}
export default Contador