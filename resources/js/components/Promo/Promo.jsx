import React from "react";
import "../Promo/promo.scss";

function Promo() {
    return (
        <section className="promo">
            <div className="promo__wrap">
                <h1 className="promo__title">Онлайн запись в вашем городе </h1>
                <ul className="promo__list">
                    <li className="promo__item">Больше 100 предложений</li>
                    <li className="promo__item">Больше 50 студий и мастеров</li>
                </ul>
                <button
                    className="button promo__button button--promo"
                    type="submit"
                >
                    <span className="button__text">Записаться сейчас</span>
                </button>
            </div>
            <img
                src="../images/promo.png"
                alt="Promo foto"
                className="promo__img"
                width="194"
                height="325"
            />
        </section>
    );
}
export default Promo;
