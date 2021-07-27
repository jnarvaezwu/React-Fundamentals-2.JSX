import './App.css';
import { useState } from 'react';

function ItemList({color, children, onDelete}){
  color = color ?? "blue";
  return (
    <li style={{color}}>
      {children} 
      <button onClick={onDelete}>
        Eliminar
      </button>
    </li>
  )
}

function ListManager({miLista, setMiLista}){

  const [texto, setTexto] = useState("Texto inicial");

  const handleDelete = (word) => {
    const newList = miLista.filter(x => x !== word);
    setMiLista(newList);
  };

  const formatList = () => miLista
    .map((palabra, i) => (
      <ItemList key={i} onDelete={() => handleDelete(palabra)}>
        {palabra}
      </ItemList>
    ))

  return (
    <div className="list-manager">
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

function LeftMenu({categories, onClick}){
  return (
    <div className="left-menu">
      {
       categories.map(category => (
        <div 
          onClick={() => onClick(category)} 
          className="left-menu-item"
        >
          {category}
        </div>
       )) 
      }
    </div>
  )
}

const myCategories = [
  "Películas", 
  "Libros", 
  "Canciones", 
  "Juegos",
  "Cuentos",
];

function generateInitState(){
  return myCategories.map(category => ({
    name: category,
    words: []
  }));
}

function App() {

  const [currentCategory, setCurrentCategory] = useState(myCategories[0]);
  const [state, setState] = useState(generateInitState());

  const handleSetList = (wordList) => {
    const newState = state.map(x => {
      if(x.name === currentCategory){
        x.words = wordList;
      }
      return x;
    });
    setState(newState);
  }

  const getSelectedList = () => {
    return state.find(x => x.name === currentCategory).words;
  }

  return (
    <div className="App">
      <LeftMenu 
        onClick={category => setCurrentCategory(category)}
        categories={myCategories} 
      />
      <ListManager 
        miLista={getSelectedList()} 
        setMiLista={handleSetList} 
      />
    </div>
  );
}

export default App;
