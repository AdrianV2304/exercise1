import React from "react";


const Button = (props) => {
    return (
    <button className={`search__parameters--button ${props.ceva}`} onClick={ () => props.functie()}>
        {props.children}
        <span className="search__parameters--text">{props.label}</span>
    </button>
    );
};

export default Button;
