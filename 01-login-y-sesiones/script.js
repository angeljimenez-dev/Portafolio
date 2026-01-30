function login() {
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;
  const mensaje = document.getElementById("mensaje");

  if (usuario === "admin" && password === "1234") {
    // Guardar sesión
    localStorage.setItem("sesion", "activa");

    mensaje.style.color = "#4ade80";
    mensaje.textContent = "Login correcto ✅";

    // Redirigir después de 1 segundo
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    mensaje.style.color = "#f87171";
    mensaje.textContent = "Usuario o contraseña incorrectos ❌";
  }
}

