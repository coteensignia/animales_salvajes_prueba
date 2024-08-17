import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from './animal.js';
import { obtenerImagen } from './obtenerImagen.js';


document.getElementById('animal').addEventListener('change', async (e) => {
  const imagen = await obtenerImagen(e.target.value);
  const preview = document.getElementById('preview')
  preview.innerHTML = `<img src="${imagen}"  class="img-fluid mb-2 h-100 w-100 " style="object-fit: cover; object-position: top;" />`
  console.log(imagen);

});


document.getElementById('btnRegistrar').addEventListener('click', async () => {
  const nombre = document.getElementById('animal').value;
  const edad = document.getElementById('edad').value;
  const comentarios = document.getElementById('comentarios').value;

  if (nombre && edad && comentarios) {
    const imagen = await obtenerImagen(nombre);
    
    // Determinar la clase correcta
    let nuevoAnimal;
    switch (nombre) {
      case 'Leon':
        nuevoAnimal = new Leon(nombre, edad, imagen, comentarios, 'rugido');
        break;
      case 'Lobo':
        nuevoAnimal = new Lobo(nombre, edad, imagen, comentarios, 'aullido');
        break;
      case 'Oso':
        nuevoAnimal = new Oso(nombre, edad, imagen, comentarios, 'gruñido');
        break;
      case 'Serpiente':
        nuevoAnimal = new Serpiente(nombre, edad, imagen, comentarios, 'siseo');
        break;
      case 'Aguila':
        nuevoAnimal = new Aguila(nombre, edad, imagen, comentarios, 'chillido');
        break;
      default:
        nuevoAnimal = new Animal(nombre, edad, imagen, comentarios, 'sonido');
        break;
    }

    mostrarAnimal(nuevoAnimal);
  } else {
    alert('Por favor, complete todos los campos.');
  }
});

function mostrarAnimal(animal) {
  const animalesDiv = document.getElementById('Animales');
  const animalDiv = document.createElement('div');
  animalDiv.classList.add('animal-card', 'p-2', 'm-2', 'bg-light', 'text-dark');
  animalDiv.innerHTML = `
    <img src="${animal.getImg()}" alt="${animal.getNombre()}" class="img-fluid mb-2" />
    <h5>${animal.getNombre()}</h5>
    <p>Edad: ${animal.getEdad()}</p>
    <p>Comentarios: ${animal.comentarios}</p>
    <p>Sonido: ${animal.getSonido()}</p>
  `;
  animalesDiv.appendChild(animalDiv);
}




