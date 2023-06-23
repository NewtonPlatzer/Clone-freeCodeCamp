import React from "react";
import "../styles/Pregunta.css";

function Pregunta(props) {
    return (
        <div className="div-pregunta">
            <h3>{props.pregunta}</h3>
            <p>{props.respuesta}</p>
        </div>
    )
}
export default Pregunta;
