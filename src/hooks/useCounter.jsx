import React from 'react';


function useCounter() {
    // implementaciones de los hooks que ya existen
    // Adaptados a la situacion de nuestr app
    const [number, setNumber] = React.useState(0);

    return {
        value: number,
        handlePlus: () => setNumber(number + 1),
        handleMinus: () => setNumber(number - 1),
        handleSpecific: (n) => setNumber(n),
    }
}

export default useCounter;