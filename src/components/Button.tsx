import { useState } from 'react';

//pode ser type também mais iremos utilizar interface
interface ButtonProps {
    color: string;
    children: string;
}

export function Button(props: ButtonProps) {
    const [counter, setCounter] = useState(1);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <button 
            type="button" 
            style={{ backgroundColor: props.color }}
            onClick={increment}
            >
                {props.children} <strong>{counter}</strong>
        </button>
    )
}