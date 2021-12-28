import React from "react";
import "../Cataloges/cataloges.scss";
import CatalogesLink from "../CatalogesLink/CatalogesLink";
function CatalogesItems() {
    return (
        <ul className="cataloges__list">
            <CatalogesLink />
            <CatalogesLink />
            <CatalogesLink />
            <CatalogesLink />
            <CatalogesLink />
            <CatalogesLink />
        </ul>
    );
}
export default CatalogesItems;
