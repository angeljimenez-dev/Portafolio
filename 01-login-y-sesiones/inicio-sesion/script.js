/*
Programador: Angel Fernando Jimenez Angeles

OBJETIVO GENERAL:
Validar las credenciales ingresadas por el usuario, crear una sesión
simulada utilizando localStorage y redirigir al dashboard si los datos
son correctos. En caso contrario, mostrar un mensaje de error.
*/

/*
FUNCIÓN CLAVE:
login()
Encargada de validar el usuario y la contraseña ingresados
en el formulario de inicio de sesión.
*/
function login() {

  // BLOQUE IMPORTANTE:
  // Obtiene los valores ingresados en los campos del formulario
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;
  const mensaje = document.getElementById("mensaje");

  // BLOQUE IMPORTANTE:
  // Verificación de credenciales
  if (usuario === "admin" && password === "1234") {

    // BLOQUE IMPORTANTE:
    // Guardar sesión activa en el navegador
    localStorage.setItem("sesion", "activa");

    // Mostrar mensaje de éxito
    mensaje.style.color = "#4ade80";
    mensaje.textContent = "Login correcto ✅";

    // BLOQUE IMPORTANTE:
    // Redirige al dashboard después de 1 segundo
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);

  } else {

    // BLOQUE IMPORTANTE:
    // Mostrar mensaje de error si las credenciales son incorrectas
    mensaje.style.color = "#f87171";
    mensaje.textContent = "Usuario o contraseña incorrectos ❌";
  }
}
