import './Informacion.css';

function Informacion() {
  return (
    <section className="container-informacion">
      <div className="container-informacion-image">
        <img src="https://picsum.photos/200/300" alt="imagen-perfil" />
      </div>
      <div>
        <p>Pedro</p>
        <p>Fragoso</p>
        <p>21/11/2023</p>
      </div>
    </section>
  )
}

export default Informacion