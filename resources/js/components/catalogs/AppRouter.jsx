import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './../../router/router'
import Layout from './../pages/Layout'
import Promo from '../pages/Promo'
import Login from '../pages/Login';
import { AuthContext } from '../context';


const AppRouter = () => {
    const { isAuth } = useContext(AuthContext)
    console.log(isAuth)
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Promo />} />
                {isAuth
                    ?
                    <>
                        {privateRoutes.map(route =>
                            <Route key={route.path} path={route.path} element={route.element} />
                        )}
                        <Route path="*" element={<Promo />} />
                    </>
                    :
                    <>
                        // isAuth=false
                        {publicRoutes.map(route =>
                            <Route key={route.path} path={route.path} element={route.element} />
                        )}
                        <Route path="*" element={<Login />} />
                    </>
                }
            </Route >
        </Routes >
    )
}
export default AppRouter
