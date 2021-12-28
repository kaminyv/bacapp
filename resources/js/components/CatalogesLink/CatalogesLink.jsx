import React from "react";
import "../Cataloges/cataloges.scss";
import "../CatalogesLink/card.scss";
function CatalogesLink() {
    return (
        <li className="cataloges__item card card--women">
            <a href="#" className="cataloges__link ">
                <span className="cataloges__text">Женские стрижки</span>
            </a>
            <button className="button button--cataloges" type="">
                <span className="button__text">поиск</span>
            </button>
        </li>
    );
}
export default CatalogesLink;
