import React from 'react';
import ReactDOM from 'react-dom';

function Master() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header"><h2>React компонент страницы пользователя мастер.</h2></div>
                        <div className="card-body">Это тестовый компонент страницы пользователя мастер.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Master;

// DOM element
if (document.getElementById('master')) {
    ReactDOM.render(<Master />, document.getElementById('master'));
}
