import Button from './components/boton/Button';
import Informacion from './components/informacion/Informacion';
import './Profile.css';

function Profile() {
  return (
    <section>
      <Informacion />
      <div className='container-profile-button'>
        <Button texto="Cerrar Sesion" />
      </div>
    </section>
  )
}

export default Profile