import React from "react";
import "../styles/Curso.css";

function Curso(props) {
  return(
    <div className="btn-curso">
        <div className="main-content-btn"><img className="icono-curso" src={require(`../images/${props.imagen}.png`)} alt="" />
        <p>{props.nombre}</p></div>
        <img className="flecha"
        src={require("../images/flecha.png")}
        alt="flecha-siguiente"
        />
    </div>
  )
}
export default Curso;
