// Desejo ter um button que ao clicar incrementa +1 em um contador 
// e exibe o valor atual do contador na tela.
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Counter: {count}</p>
        </>
    )
}

export default Counter;