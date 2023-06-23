import React from "react";
import "../styles/Testimonio.css"

function Testimonio(props) {
  return (
    <div className="testimonio">
      <div className="div-imagen-testimonio">
        <img src={require(`../images/imagen-${props.imagen}.png`)} alt="" />
      </div>
      <div className="div-texto-testimonio">
        <h3>
          <strong>{props.nombre}</strong> en {props.pais}
        </h3>
        <h3>
          {props.cargo} en <strong>{props.empresa}</strong>
        </h3>
        <p>"{props.texto}"</p>
      </div>
    </div>
  );
}
export default Testimonio;
