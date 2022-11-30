//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
//import Button from './Components/Button/Button';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Counter from './Components/Counter/Counter';

function App() {
  return (
    <div className="App">
      {/*<Button label={'cancelar'} background='blue' />
      <Button label={'aceptar'} background='green' action={() => console.log('acepte')} />
      <button>boton</button>*/}
      <Navbar />
      <ItemListContainer greeting={'Estos son nuestros productos disponibles!! ^^'}/>
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <Counter />
    </div>
  );
}

export default App;
