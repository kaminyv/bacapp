import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './catalogs/AppRouter';
import { AuthContext } from './context';


function App() {
    const [isAuth, setIsAuth] = useState(false)
    return (
        <AuthContext.Provider  value={{
            isAuth,
            setIsAuth,
        }}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
            </AuthContext.Provider>
    );
}
export default App;

// DOM element
if (document.getElementById('catalog')) {
    ReactDOM.render(<App />, document.getElementById('catalog'));
}
