import React from 'react'
import { useState } from 'react'

const Contador = () => {
const [counter,setCounter] = useState(0)

const aumentar=()=>{
   setCounter(counter+1)
}
const disminuir=()=>{
  setCounter(counter-1)
}
const resetCounter=()=>{
  setCounter(0)
}

  return (
    <>
      <div>Valor del Contador {counter}
      <div>
          {counter>=10 ?
          <>
            <p>Has superado los 10 Click</p>
            <button onClick={resetCounter}>Reset</button>
          </>
          :
          <>
            <p>Sigue dando Click</p>     
            <button onClick={aumentar}>+1</button>
            <button onClick={disminuir}>-1</button>
          </>
         }
         
      </div>
      </div>
    </>
  )
}
export default Contador