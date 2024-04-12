const btnApi = document.getElementById("btn-api");
const mensaje = document.querySelector("p");

btnApi.addEventListener("click", async () => {
    const response = await fetch("/");
    const data = await response.json();

    mensaje.textContent = data.mensaje;
});
