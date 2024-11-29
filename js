document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
event.preventDefault();
if (validateForm()) {
alert("Formulario enviado exitosamente.");
// Aquí puedes enviar el formulario si estás usando AJAX o habilitar el submit si lo necesitas
}
});

function validateForm() {
let isValid = true;

// Validación de nombres
const nameField = document.getElementById("name");
if (nameField.value.trim() === "") {
  showError(nameField, "Por favor, ingresa tus nombres y apellidos.");
  isValid = false;
} else {
  clearError(nameField);
}

// Validación de correo electrónico
const emailField = document.getElementById("e-mail");
if (!validateEmail(emailField.value.trim())) {
  showError(emailField, "Por favor, ingresa un correo electrónico.");
  isValid = false;
} else {
  clearError(emailField);
}

// Validación de país del que proviene o del que habita en este momento
const countryField = document.getElementById("country");
if (countryField.value === "Selecciona tu país") {
  showError(countryField, "Por favor, selecciona tu país.");
  isValid = false;
} else {
  clearError(countryField);
}

// Validación de ciudad de la que proviene o de la que habita en este momento
const cityField = document.getElementById("city");
if (cityField.value.trim() === "selecciona tu ciudad") {
  showError(cityField, "Por favor, ingresa tu ciudad.");
  isValid = false;
} else {
  clearError(cityField);
}

// Validación de el codigo del pais ejemplo en el caso de ecuador +593
const prefixField = document.getElementById("prefix");
if (!/^\+\d+$/.test(prefixField.value.trim())) {
  showError(prefixField, "Por favor, ingresa un prefijo válido (Ej: +593).");
  isValid = false;
} else {
  clearError(prefixField);
}

// Validación del numero de telefono
const phoneField = document.getElementById("phone");
if (!/^\d+$/.test(phoneField.value.trim()) || phoneField.value.trim().length < 7) {
  showError(phoneField, "Por favor, ingresa un número de teléfono válido.");
  isValid = false;
} else {
  clearError(phoneField);
}

// Validación en el estudio depende de tu nivel
const educationField = document.getElementById("education");
if (educationField.value === "Selecciona tu nivel") {
  showError(educationField, "Por favor, selecciona nivel de estudios.");
  isValid = false;
} else {
  clearError(educationField);
}

// Validación de experiencia
const experienceField = document.getElementById("experience");
if (experienceField.value === "Selecciona tu nivel de experiencia") {
  showError(experienceField, "Por favor, selecciona tu nivel de experiencia.");
  isValid = false;
} else {
  clearError(experienceField);
}

return isValid;
}

function showError(input, message) {
const parent = input.parentElement;
let errorElement = parent.querySelector(".error-message");

if (!errorElement) {
  errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.style.color = "red";
  errorElement.style.fontSize = "0.9rem";
  errorElement.style.marginTop = "5px";
  parent.insertBefore(errorElement,input);
}

errorElement.textContent = message;
input.classList.add("is-invalid");
}

function clearError(input) {
const parent = input.parentElement;
const errorElement = parent.querySelector(".error-message");

if (errorElement) {
  parent.removeChild(errorElement);
}

input.classList.remove("is-invalid");
}

function validateEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
return emailRegex.test(email);
}
});
