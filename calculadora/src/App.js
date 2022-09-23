import './App.css';
import freecodeCampLogo from './imagenes/freecodeCamp.jpg';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import {useState} from 'react';
import { evaluate } from 'mathjs';

 
function App() 
{
const [input,setInput]= useState('');
const agragarInput=val=>{
  setInput(input + val);
};
const calcularResultado= ()=> {
  if(input){
    setInput(evaluate(input));
  }
  else if(input==0){
    alert('ingrese un valor')

  }
  else{
    alert('por favor ingrese valores para realizar calculo')
  }
};


  return (
    <div className="App">
  <div className='freecodecamp-logo-contenedor'>s
    <img src={freecodeCampLogo}
    className='freecodecamp-logo' 
    alt='Logo de freecodecamp' />
  </div>
  <div className='contenedor-calculadora'>
    <Pantalla input={input}/>
<div className='fila'>
  <Boton manejarClic={agragarInput}>1</Boton>
  <Boton  manejarClic={agragarInput}>2</Boton>
  <Boton  manejarClic={agragarInput}>3</Boton>
  <Boton manejarClic={agragarInput}>+</Boton>
</div>
<div className='fila'>

<Boton manejarClic={agragarInput}>4</Boton>
  <Boton manejarClic={agragarInput}>5</Boton>
  <Boton manejarClic={agragarInput}>6</Boton>
  <Boton manejarClic={agragarInput}>-</Boton>

</div>
<div className='fila'>

<Boton manejarClic={agragarInput}>7</Boton>
  <Boton manejarClic={agragarInput}>8</Boton>
  <Boton manejarClic={agragarInput}>9</Boton>
  <Boton manejarClic={agragarInput}>*</Boton>
</div>
<div className='fila'>

<Boton manejarClic={calcularResultado} >=</Boton>
  <Boton manejarClic={agragarInput}>0</Boton>
  <Boton manejarClic={agragarInput}>.</Boton>
  <Boton manejarClic={agragarInput}>/</Boton>
</div>
<div className='fila'>
  <BotonClear manejarClic={()=> setInput('')}>
    Clear
  </BotonClear>
</div>

  </div>
    </div>
  );
}

export default App;
