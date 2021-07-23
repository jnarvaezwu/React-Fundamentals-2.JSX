import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function ItemList({color, children}){
  color = color ?? "blue";
  return <li style={{color}}>{children}</li>
}

function App() {

  const [miLista, setMiLista] = useState([]);
  const [texto, setTexto] = useState("Texto inicial");

  const formatList = () => miLista
    .map(palabra => <ItemList>{palabra}</ItemList>)

  return (
    <div className="App">
      <input onChange={(evt) => setTexto(evt.target.value) } />
      <button 
        onClick={() => setMiLista([...miLista, texto])}
      >
        Agregar
      </button>
      <br/>
      <ul>
        {formatList()}
      </ul>
    </div>
  );
}

export default App;
