import './App.css';
import Moduloext from './Moduloext.js';

// Otra forma de declarar la App puede ser con funciones flechas
/* 
  const App = () => {
      return (
        <div className="App">
           Hola mundo
        </div>
     );
  }
*/

function App() {

  //Componentes: se crean como funciones y permiten llamarse simplemente eJ:
  // Los componentes empiezan con CL (capital letter)
  const Recordatorio = () => {
    return <p> EN JSX siempre hay que cerrar las etiquetas ... whaaat? </p>
  }

  // No crear componentes dentro de componentes XF
  // Se puede modular, de hecho, los componentes para importarlos desde otro lado. X ejemplo .moduloext


  return (
    <div className="App">
      <Moduloext color="blue" msg="hola bb"/>
      <Moduloext color="#923" msg="segui"/>
      <Moduloext color="red" msg="aprendiendo"/>
      <Recordatorio/>
      <Recordatorio/>
      <Moduloext/>


    </div>
  );
}

export default App;


