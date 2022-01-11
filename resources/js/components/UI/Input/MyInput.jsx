// import React from 'react';
// import './MyInput.scss';

// const MyInput = React.forwardRef((props, children) => {
//     return <input {...props} className='input' />;
// });
// export default MyInput;

import React from 'react';

const MyInput = ({ children, ...props }) => {
    return <input {...props} />;
};

export default MyInput;
