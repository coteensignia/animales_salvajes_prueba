
export async function obtenerImagen(nombre) {
  // Aquí deberías implementar la lógica para obtener la URL de la imagen
  // Por ejemplo, puedes usar un objeto de mapeo o hacer una solicitud a un servidor
  const imagenes = {
    Leon: 'assets/imgs/Leon.jpg',
    Lobo: 'assets/imgs/Lobo.jpg',
    Oso: 'assets/imgs/Oso.jpg',
    Serpiente: 'assets/imgs/Serpiente.jpg',
    Aguila: 'assets/imgs/Aguila.jpg'
  };
  return imagenes[nombre] || 'assets/imgs/default.jpg'; // Imagen por defecto si no se encuentra
}
