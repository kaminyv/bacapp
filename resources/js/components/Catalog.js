import React from 'react';
import ReactDOM from 'react-dom';

function Catalog() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header"><h2>React компонент каталог мастеров (Главная).</h2></div>
                        <div className="card-body">Это тестовый компонент главной страницы для вывода мастеров.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;

// DOM element
if (document.getElementById('catalog')) {
    ReactDOM.render(<Catalog />, document.getElementById('catalog'));
}
