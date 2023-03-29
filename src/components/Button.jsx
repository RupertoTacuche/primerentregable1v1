import React from 'react';
import "./styles/Button.css"

const Button = ({handleNewQuote}) => {
    return <button className="button" onClick={handleNewQuote}>Cambiar Frase</button>;
}

export default Button;