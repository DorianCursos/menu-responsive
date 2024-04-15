// Localizamos los elementos del HTML a través de su ID
const buttonMenuElement = document.getElementById('button-menu');
const menuElement = document.getElementById('menu');

// classList.contains
// classList.add
// classList.remove

function handleMenu() {
  // Preguntamos si el menu contiene la clase show
  if (menuElement.classList.contains('show')) {
    // Si contiene la clase show, se la quitamos.
    menuElement.classList.remove('show');
  } else {
    // Si no contiene la clase show, se la ponemos
    menuElement.classList.add('show');
  }
}

// Al elemento que nos interese le añadimos un evento de escucha.
// Escucha cuando recibas un click y llama a la función handleMenu
buttonMenuElement.addEventListener('click', handleMenu);
