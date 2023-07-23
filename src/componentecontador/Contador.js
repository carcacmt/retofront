import React from 'react'
import { useState } from 'react'

const Contador = () => {
const [counterCand1,setCounterCand1] = useState(1)
const [counterCand2,setCounterCand2] = useState(1)

const votarCandidato1=()=>{
   setCounterCand1(counterCand1+1)
}
const votarCandidato2=()=>{
  setCounterCand2(counterCand2+1)
}

  return (
    <>
      <div>Voto Para Representante Grupo G4 
      <div>
          {(counterCand1>1 || counterCand2>1)?
          <>
            <p>Gracias por Su Voto</p>
          </>
          :
          <>
            <div>
                <p>Candidato 1</p>     
               <button onClick={votarCandidato1}>Votar</button>
            </div>
            <div>
                <p>Candidato 2</p>     
               <button onClick={votarCandidato2}>Votar</button>
            </div>
          </>
         }         
      </div>
      </div>
    </>
  )
}
export default Contador