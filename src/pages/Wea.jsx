import { useState } from "react";

export default function Wea() {

const [count, setCount] = useState(0)

function sumarNumero(){
    setCount(prevCount => prevCount + 1)
}

function restarNumero(){
    setCount(prevCount => prevCount - 1)
}


return(
<>
    <div>
        <h1>{count}</h1>
    </div>

    <div>
        <button onClick={sumarNumero}>sumar</button>
        <button onClick={restarNumero}>restar</button>
    </div>
</>
)
}

