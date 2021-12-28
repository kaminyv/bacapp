import React from "react";
import "../Footer/footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <a href="#" className="logo footer__logo"></a>
            <div className="footer__wrap">
                <p className="footer__text">ДЛЯ МАСТЕРОВ И КОМПАНИЙ</p>
                <p className="footer__text">
                    БЕСПЛАТНОЕ ПРИЛОЖЕНИЕ ДЛЯ ОНЛАЙН-ЗАПИСИ
                </p>
            </div>
        </footer>
    );
}

export default Footer;
