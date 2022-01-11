import React from 'react';
import './MyButton.scss';

const MyButton = ({ children, ...props }) => {
    return (
        <button {...props}>
            <span className='button__text'>{children}</span>
        </button>
    );
};
export default MyButton;
