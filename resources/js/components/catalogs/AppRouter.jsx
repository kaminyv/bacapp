import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './../pages/Login';
import Registre from './../pages/Registre'
import Layout from './../pages/Layout'
import Master from './../pages/Master.jsx'
import User from './../pages/User.jsx'
// import User from './../User'
import Main from './../pages/Main';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Main />} />
                <Route path='registre' element={<Registre />} />
                <Route path='login' element={<Login />} />
                <Route path='master' element={<Master />} />
                {/* <Route exact path='master/*' element={<Master />} /> */}
                <Route exact path='master/:id' element={<Master animate={true} />} />
                <Route path='user' element={<User />} />
            </Route>
        </Routes>
    )
}
export default AppRouter
