import React from 'react';
import { useParams } from 'react-router-dom'


function Master() {
    const params = useParams()
    console.log(params)
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header"><h2>страницa пользователя Master.</h2></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Master;
