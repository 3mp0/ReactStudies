import React, { useState } from 'react'

function ArrayDeCosas() {

    const [arrayDeCosas, setArrayDeCosas] = useState(["Cosa 1", "Cosa 2"])

    function agregarCosa() {
        setArrayDeCosas(cosaAnterior => [...cosaAnterior, `Cosa ${cosaAnterior.length + 1}`])
        arrayDeCosas.map(cosa => <p key={cosa}>{cosa}</p>)
    }

  return (
    <div>
        <button onClick={agregarCosa}>Agregar Cosa</button>
        <br></br>
        {arrayDeCosas}
    </div>
  )
}

export default ArrayDeCosas