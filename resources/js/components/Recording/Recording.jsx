import "../Recording/recording.scss";
import React from "react";
import Article from "../Article/Article";

function Recording() {
    return (
        <section class="recording">
            <Article />
            <img
                src="../Recording/recording.png"
                alt="Recording foto"
                class="recording__img"
                width="194"
                height="325"
            />
            <Article />
        </section>
    );
}
export default Recording;
