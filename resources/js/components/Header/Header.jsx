import React from "react";
import "../Header/header.scss";

function Header() {
    // let navMain = document.querySelector(".nav"),
    //     navToggle = document.querySelector(".nav__toggle");

    // navMain.classList.remove("nav--nojs");

    // navToggle.addEventListener("click", function () {
    //     if (navMain.classList.contains("nav--closed")) {
    //         navMain.classList.remove("nav--closed");
    //         navMain.classList.add("nav--opened");
    //     } else {
    //         navMain.classList.add("nav--closed");
    //         navMain.classList.remove("nav--opened");
    //     }
    // });
    return (
        <header className="header">
            <a href="#" className="logo header__logo"></a>
            <nav className="nav  nav--closed nav--nojs">
                <button className="nav__toggle" type="button">
                    <span className="visually-hidden">Открыть меню</span>
                </button>
                <ul className="nav__list menu">
                    <li className="nav__item ">
                        <a className="nav__link">
                            <span className="nav__text">Услуги и цены</span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link">
                            <span className="nav__text">Каталаг услуг</span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link">
                            <span className="nav__text">Избранное</span>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link">
                            <span className="nav__text">Мои записи</span>
                        </a>
                    </li>
                </ul>
                <ul className="nav__list user">
                    <li className="nav__item user__item">
                        <a href="#" className="nav__link user__link">
                            <span className="nav__text user__text">Вход</span>
                        </a>
                    </li>
                    <li className="nav__item user__item">
                        <a href="#" className="nav__link user__link">
                            <span className="nav__text user__text">
                                Регистрация
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
