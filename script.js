/* Año actual en el footer */
document.getElementById("anio").textContent = new Date().getFullYear();

/* Botón que muestra un mensaje */
const btnInfo = document.getElementById("btnInfo");
const mensaje = document.getElementById("mensaje");
btnInfo.addEventListener("click", () => {
  mensaje.textContent = "¡Hola! Este sitio está publicado correctamente en GitHub Pages.";
});

/* Toggle claro/oscuro con preferencia guardada */
const themeBtn = document.getElementById("themeBtn");
const html = document.documentElement;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  html.setAttribute("data-theme", "light");
  themeBtn.textContent = "Modo Oscuro";
}

themeBtn.addEventListener("click", () => {
  const isLight = html.getAttribute("data-theme") === "light";
  if (isLight) {
    html.removeAttribute("data-theme");
    themeBtn.textContent = "Modo Claro";
    localStorage.removeItem("theme");
  } else {
    html.setAttribute("data-theme", "light");
    themeBtn.textContent = "Modo Oscuro";
    localStorage.setItem("theme", "light");
  }
});