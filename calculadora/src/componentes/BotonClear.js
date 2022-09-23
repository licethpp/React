import React from "react";

const BotonClear=(props)=>(

<div className="boton-clear"
    onClick={props.manejarClic}>
    {props.children}

</div>

);
export default BotonClear;