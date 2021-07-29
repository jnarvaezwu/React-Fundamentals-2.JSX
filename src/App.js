import './App.css';
import { useEffect, useState } from 'react';
import { getDepartments, getCitiesByDepartments} from "./api";



function App() {

  const [departments, setDepartments] = useState([]);
  const [inputName, setInputName] = useState("");
  const [selectedDep, setSelectedDep] = useState("0");

  const [cities, setcities] = useState([]);

  const getDepartmentsEfect = () => {

    let wasUnmounted = false;

    getDepartments()
    .then(response => {
      if(wasUnmounted) return;
      
      setDepartments(response);
    });

    return () => {
      wasUnmounted = true;
    }
  }
  useEffect(getDepartmentsEfect, []);


  const getCitiesEfect = () => {
    if(selectedDep === "0"){
      setcities([]);
      return;
    }

    getCitiesByDepartments(selectedDep)
      .then(cities => {
        setcities(cities);
        alert("Se ha llamado a cities");
      })
  }
  useEffect(getCitiesEfect, [selectedDep]);

  const handleSelectDepartmentChange = (evt) => {
    setSelectedDep(evt.target.value)
  };

  const handleInputChange = (evt) => {
    let value = evt.target.value;
    
    value = value.toUpperCase();
    
    setInputName(value);
  }

  return (
    <div className="App">
      <label>Nombre:</label>
      <input 
        onChange={handleInputChange} 
        value={inputName}
      />
      {inputName}
      
      <br/>
      <br/>
      <label>Departamento:</label>
      <select onChange={handleSelectDepartmentChange}>
        <option value="0" >Seleccione un departamento</option>
        {departments.map((dep, i) => (
          <option key={i} value={""+dep.id}>{dep.name}</option>
        ))}
      </select>

      <br/>
      <br/>
      <label>Ciudad:</label>
      <select >
        <option value="0" >Seleccione una ciudad</option>
        {cities.map((city, i) => (
          <option key={i} value={""+city.id}>{city.name}</option>
        ))}
      </select>

    </div>
  );
}

export default App;
