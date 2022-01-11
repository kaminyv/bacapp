import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/Login';
import { AuthContext } from './context';

function Catalog() {
    const [isAuth, setIsAuth] = useState({ name: '', password: '' });

    useEffect(() => {
        if (localStorage.getItem({ name: '', password: '' })) {
            localStorage.setItem({ name: '', password: '' });
        }
    }, []);
    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <div className='container'>
                {/* <h1>Главная страница</h1> */}
                <Login />
            </div>
        </AuthContext.Provider>
    );
}

export default Catalog;

// DOM element
if (document.getElementById('catalog')) {
    ReactDOM.render(<Catalog />, document.getElementById('catalog'));
}
