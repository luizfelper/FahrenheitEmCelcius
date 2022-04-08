import './App.css';
import { useState } from 'react';
import {Button, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [value, setValue] = useState('teste');
  const [celcius, setCelcius] = useState('');
  const [show, setShow] = useState(false)

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
      const valueConverted = Math.round((value - 32)  * 5 / 9);
      setShow(true);
      setCelcius(valueConverted);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Converter Fahrenheit em Celcius</p>
        <form>
          <input type="text" placeholder="Digite o valor em Fahrenheit"
          onChange={handleChange}/>
          <Button variant="primary" onClick={handleSubmit}>Enviar</Button>
        </form>
        {celcius && show  ?
        <Alert variant="success">
          <Alert.Heading>Temperatura em Celcius</Alert.Heading>
          {celcius > 30 ? <h1> {celcius} 🥵 </h1> : ''}
          {celcius < 30 ? <h1> {celcius} 🥶 </h1> : ''}
            <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert> : 'Digite um valor'}
      </header>
    </div>
  );
}

export default App;
