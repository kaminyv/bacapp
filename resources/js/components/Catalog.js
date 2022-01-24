import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main'

function Catalog() {
        return (
        <Main/>
        );
    }
    export default Catalog;

// DOM element
if (document.getElementById('catalog')) {
    ReactDOM.render(<Catalog />, document.getElementById('catalog'));
}
