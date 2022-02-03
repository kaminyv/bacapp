import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './catalogs/AppRouter';


function Catalog() {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}
export default Catalog;

// DOM element

if (document.getElementById('catalog')) {
    ReactDOM.render(<Catalog />, document.getElementById('catalog'));
}
