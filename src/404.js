import { Link } from 'react-router-dom';
import error from './assets/error404.jpg';

function Error404() {
  return (
    <section className='container-404'>
      <img alt="error404" src={error} />
      <Link to="/">
        <p>Regresar a Login</p>
      </Link>
    </section>
  )
}

export default Error404