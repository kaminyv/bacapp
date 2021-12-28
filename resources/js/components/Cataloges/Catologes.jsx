import React from "react";
import "../Cataloges/cataloges.scss";
import CatalogesItems from "../CatalogesItems/CatalogesItems";
function Cataloges() {
    return (
        <section className="cataloges">
            <h2 className="cataloges__title">Услуги</h2>
            <CatalogesItems />
            <button className="button button--all" type="">
                <span className="button__text">Смотреть весь Каталог</span>
            </button>
        </section>
    );
}
export default Cataloges;
