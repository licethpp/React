import './App.css';
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>
        Esto es lo que dice nuestros alumnos sobre freecampCode
      </h1>
     <Testimonio 
     nombre="Eva Botina"
     pais="EE.UU" 
     imagen="eva"
     cargo="Ingeniera de softwer"
     empresa="Google"
     testimonio=" I think it is marvellous, all my music on my laptop had been somehow monopolized by iTune MP4 player a friend of mine installed on the lap top. I could never play these songs on my iRiver and was very frustrated for months until I downloaded the Switch software. Very versatile, very easy to use, sure makes me a happy camper..."/>
      <Testimonio 
     nombre="Gloria Stefan"
     pais="Nigeria" 
     imagen="gloria"
     cargo="Ingeniera de softwer"
     empresa="microsoft "
     testimonio=" I think it is marvellous, all my music on my laptop had been somehow monopolized by iTune MP4 player a friend of mine installed on the lap top. I could never play these songs on my iRiver and was very frustrated for months until I downloaded the Switch software. Very versatile, very easy to use, sure makes me a happy camper..."/>
       <Testimonio 
     nombre="Eva Botina"
     pais="Canada" 
     imagen="maria"
     cargo="Ingeniera de softwer"
     empresa="Moodys"
     testimonio=" I think it is marvellous, all my music on my laptop had been somehow monopolized by iTune MP4 player a friend of mine installed on the lap top. I could never play these songs on my iRiver and was very frustrated for months until I downloaded the Switch software. Very versatile, very easy to use, sure makes me a happy camper..."/>
     
     </div>

    </div>
  );
}

export default App;
