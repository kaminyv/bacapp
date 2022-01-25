import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Main from './pages/Main'

function Catalog() {
    return (<>
        <Header/>
        <Main />
        <Footer/>
        </>
        );
    }
    export default Catalog;

// DOM element
if (document.getElementById('catalog')) {
    ReactDOM.render(<Catalog />, document.getElementById('catalog'));
}
