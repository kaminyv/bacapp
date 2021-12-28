import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Promo from "./Promo/Promo";
import Cataloges from "./Cataloges/Catologes";
import Recording from "./Recording/Recording";

function Catalog() {
    return (
        <div className="container">
            <Header />
            <main class="main">
                <Promo />
                <Cataloges />
                <Recording />
            </main>
            <Footer />
        </div>
    );
}

export default Catalog;

// DOM element
if (document.getElementById("catalog")) {
    ReactDOM.render(<Catalog />, document.getElementById("catalog"));
}
