import React, { useState } from 'react'

function DivCambiable() {

  const [isGoingOut, setIsGoingOut] = useState(true)

  function cambiarRespuesta(){
    setIsGoingOut(goingOut=> !goingOut)
    }

  return (
    <>
    <div className='estado'>
      <h1>erigei?</h1>
    <div onClick={cambiarRespuesta} className='respuesta'>
      <h2>{isGoingOut?"Si":"No"}</h2>
    </div>
    </div>
    </>
  )
}

export default DivCambiable