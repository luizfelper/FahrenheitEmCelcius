import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('teste');
  const [celcius, setCelcius] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
      const valueConverted = Math.round((value - 32)  * 5 / 9);
      setCelcius(valueConverted);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Converter Fahrenheit em Celcius</p>
        <form>
          <input type="text" placeholder="Digite o valor em Fahrenheit"
          onChange={handleChange}/>
          <button onClick={handleSubmit}>Enviar</button>
        </form>
        <p>Celcius: {celcius}</p>
      </header>
    </div>
  );
}

export default App;
