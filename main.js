const formulario = document.getElementById("login"); // nodo

formulario.addEventListener("submit", (event) => {
    console.log("antes del click")
    // objeto del evento
    // Caracteristicas del evento
    // nodo sufrio el evento
    // coordenadas a nivel del viewport donde sucedio el evento
    // bubble
    // path

    // metodos del evento
    // preventDefault = detiene el evento
    // stopPropagation = evita la propagación
    event.preventDefault();
    event.stopPropagation();
    console.log("evento", event);
    console.log("despues del click");

    LimpiaMensajes();

    const userData = event.target.children.user.value;
    const passData = event.target.children.pass.value;

    if (userData !== "" && passData !== "") {
        const exitoso = Login(userData, passData);

        if (exitoso) {
            alert("Login exitoso");
        } else {
            alert("revisa tus credenciales")
        }
    } else {
        MensajeError();
    }

});

// const boton = document.getElementById("click");

// boton.addEventListener("click", (event) => {
//     alert("fue clicado desde el boton")
//     event.stopPropagation();
//     console.log("evento", event)

// });

// document.body.addEventListener("click", () => {
//     alert("fue clicado desde el body")
// });