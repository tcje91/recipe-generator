import React from 'react';

const GenerateButton = ({ changeState }) => {
    return (
        <button className="emphButton" onClick={changeState}>Generate recipe</button>
    )
}

export default GenerateButton;