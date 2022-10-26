import logo from './logo.svg';
import './App.css';

import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import ContacList from './ejercicios/ContacList';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';

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
        {/* <TaskListComponent></TaskListComponent> */}

        {/* <ContacList></ContacList> */}

        
        {/**ejemplo de renderizado condicional*/}
        {/* <OptionalRender></OptionalRender> */}


        {/**ejemplo de uso de formik y yup*/}
        {/* <LoginFormik></LoginFormik> */}
        <RegisterFormik></RegisterFormik>


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

      {/**gestion de eventos */}
      {/* <Father></Father> */}
    </div>
  );
}

export default App;
