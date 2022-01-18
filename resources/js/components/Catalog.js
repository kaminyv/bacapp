import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import Login from './pages/Login';
import { AuthContext } from './context';
import Home from './pages/Home';

function Catalog() {
    const { user, setUser } = useState({ name: '', password: ''});

    useEffect(() => {
        if (localStorage.getItem({ name: '', password: '' })) {
            setUser(localStorage.setItem({ name: '', password: '' }));
        }  ;
    }, []);
    return (
        <AuthContext.Provider value={{ user, setUser}}>
            <>
              <Home/>
                {/* <h1>Главная страница</h1> */}
                {/* <Login /> */}
            </>
        </AuthContext.Provider>
    );
}

export default Catalog;

// DOM element
if (document.getElementById('catalog')) {
    ReactDOM.render(<Catalog />, document.getElementById('catalog'));
}
