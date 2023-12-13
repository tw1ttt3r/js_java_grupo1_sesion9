import { useEffect, useState } from 'react';
import './Input.css';

function Input(props) {

  const [orientacion, setOrientacion] = useState('container-input');
  const [tipo, setTipo] = useState('text');


  useEffect(() => {
    if (props.orientacion === 'vertical') {
      setOrientacion("container-input-vertical")
    } else {
      setOrientacion("container-input")
    }
  }, [props.orientacion]);
  
  useEffect(() => {
    if (props.type !== undefined) {
      setTipo(props.type);
    }
  }, [props.type]);

  return (
    <div className={ orientacion }>
      <label htmlFor={props.id}>{ props.label }</label>
      <input type={tipo} id={props.id} />
    </div>
  )
}

export default Input