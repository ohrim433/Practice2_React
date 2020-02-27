import React from 'react';

function Buttons({handler}) {
    const add1 = (i) => {
        handler(i);
    };


    return (
        <div>
            <button onClick={add1.bind(null,1)}>Add 1</button>
            <button onClick={add1.bind(null,-1)}>Add -1</button>
            <button onClick={add1.bind(null,100)}>Add 100</button>
            <button onClick={add1.bind(null,-100)}>Add -100</button>
            {/*<input id="inpt" type="number"/> // make new component*/}
        </div>
    );
}

export default Buttons;