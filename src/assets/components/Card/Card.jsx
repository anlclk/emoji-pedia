import React from "react";

function Card(props) {
    return(
        <div className="card">
            <h1>{props.emoji}</h1>
            <h2 className="content">{props.name}</h2>
            <h4 className="content">{props.meaning}</h4>

        </div>
    );

}

export default Card;