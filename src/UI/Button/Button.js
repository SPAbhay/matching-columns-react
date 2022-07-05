import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <a>
            <div className={`button ${props.className}`}>
                {props.children}
            </div>
        </a>

    );
};

export default Button;