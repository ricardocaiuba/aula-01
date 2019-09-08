import React, { useState } from 'react';

const useCounter = (initialValue) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    return [counter, increment, decrement];
};

function App() {
    const [counter, increment, decrement] = useCounter(0);
    const [counter2, increment2] = useCounter(10);

    return (
        <div className="container">
            <h1>Opções de Incremento</h1>
            <hr />
            <button
                className="btn btn-outline-primary btn-sm"
                onClick={increment}>
                incrementa
      </button>
            <span> {counter} </span>
            <button
                className="btn btn-outline-warning btn-sm"
                onClick={increment2}>
                incrementa
      </button>
            <span> {counter2} </span>
            <button
                className="btn btn-outline-danger btn-sm"
                onClick={decrement}>
                Decrementar
      </button>
        </div>
    );
}

export default App;
