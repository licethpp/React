import React from "react";
import "../hojas-de-stilo/Testimonio.css"

function Testimonio(props){
  return(
    <div  className="contenedor-testimonio">
      <img className="imagen-testimonio"  src={ require(`../imagenes/testimonio-${props.imagen}.jpg`)} />
      <div className="contenedor-texto-testimonio">
      <p className="nombre-testomonio"> <strong> {props.nombre} en 
        </strong>{props.pais}  </p>
      <p className="cargo-testimonio"> {props.cargo}en <strong>{props.empresa}
        </strong> </p>
      <p className="texto-testimonio"> {props.testimonio}</p>
      </div>
    </div>

  );

}
export default Testimonio;