import React from 'react';
import './button.styles.scss';

function Button({ buttonText }) {
    return (
        <button className='button-container'>
            {buttonText}
        </button>
    )
}

export default Button;
