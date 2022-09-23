import './App.css';
import Boton from './componentes/Bonton';
import Contador from './componentes/Contador';
import freecodeCampLogo from "./imagenes/freecodecamp-logo.jpg"
import React, { useState } from "react";

function App() {

  const [numClics,setNumClics]= useState(0);

  const manejarClic = ()=>{
   setNumClics(numClics + 1);

    //console.log('Clic')

  };
  const reiniciarContador=()=>{
    setNumClics(0);
   //console.log('Reiniciar')

  };
  return (
    <div className="App">
     <div className='freecodecamp-logo-contenedor' >
     <img className='freecodecamp-logo' src={freecodeCampLogo} alt="logo de freecodecamp"/>
     </div>
     <div className='contenedor-principal'>
      <Contador numClics={numClics}/>
      <Boton texto='Clic'
      esBotonDeClic={true}
      manejarClic={manejarClic}/>
      <Boton texto= 'Reiniciar'
      esBotonDeClic={false}
      manejarClic={reiniciarContador}
      />

     </div>
    </div>
  );
}

export default App;
