import logo from './logo.svg';
import './App.css';

import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/*componente propio greeting*/}
        {/*<Greeting name="M artin"></Greeting>      
        <GreetingF name="Gabriel">         
        </GreetingF>
        componente de listado de tareas */}
        <TaskListComponent></TaskListComponent>
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2>*/}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre='martin'>
          {/**todo aqui es tratado como props.children */}
          {/* <h3>
            Contenido del children
          </h3> */}
        {/* </Ejemplo4> */}
        {/* <GreetingStyled name='martin' ></GreetingStyled> */}
      {/* </header> */}
    </div>
  );
}

export default App;
