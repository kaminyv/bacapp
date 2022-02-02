import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../catalogs/Header';
import Footer from '../catalogs/Footer';
const Layout = () => {
    return (<>
        <Header />
        <Outlet />
        <Footer />
    </>
    )
}
export default Layout
