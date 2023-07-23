import React from 'react'

const Resultado = ({pesor,euroc,dolarc}) => {
  return (
    <>
        <p>
            Peso:{pesor}
        </p>
        <p>
            Euro:{euroc}
        </p>
        <p>
            Dolar:{dolarc}
        </p>
    </>
  )
}

export default Resultado