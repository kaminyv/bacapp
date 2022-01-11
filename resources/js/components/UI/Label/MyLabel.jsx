import React from 'react';

const MyLabel = ({ children, ...props }) => {
    return (
        <label {...props} className='label'>
            {children}
        </label>
    );
};
export default MyLabel;
