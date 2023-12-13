import './App.css';
import Title from './components/title/Title';
import Input from './components/input/Input';
import Button from './components/boton/Button';
import Modal from './components/modal/Modal';
import { useState } from 'react';

function App() {

  const [ visibleModal, setVisibleModal ] = useState(false);

  return (
    <div className="App">
      <Title title="Mi Escuela"/>
      <form>
        <Input id="user" label="Usuario: " />
        <Input id="pass" label="Contraseña: " type="password" />
        <Button texto="login" />
      </form>
      { visibleModal && <Modal descripcion="Login Exitoso" texto="Aceptar" /> }
    </div>
  );
}

export default App;
