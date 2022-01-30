import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Registre from './pages/Registre'
import Layout  from './pages/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Catalog() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="registre" element={<Registre />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Catalog;

// DOM element
if (document.getElementById('catalog')) {
    ReactDOM.render(<Catalog />, document.getElementById('catalog'));
}
