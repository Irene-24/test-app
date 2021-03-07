import logo from './logo.svg';
import image from "./assets/images/AnimeX_48346.jpeg";
import './App.css';
import classes from "./App.module.css";

function App ()
{
  return (
    <div className="App">
      <h1 className={ classes.header } >Hello world</h1>
      <img src={ image } alt="image" />
    </div>
  );
}

export default App;
