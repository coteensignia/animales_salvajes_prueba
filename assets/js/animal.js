class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this.nombre = nombre;
    this.edad = edad;
    this.img = img;
    this.comentarios = comentarios;
    this.sonido = sonido;
  }

  getNombre() {
    return this.nombre;
  }

  getEdad() {
    return this.edad;
  }

  getImg() {
    return this.img;
  }

  setComentarios(comentarios) {
    this.comentarios = comentarios;
  }

  getSonido() {
    return this.sonido;
  }
}

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  rugir() {
    return "Rugido del león";
  }
}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  aullar() {
    return "Aullido del lobo";
  }
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  grunir() {
    return "Gruñido de Oso";
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  sisear() {
    return "Siseo de Serpiente";
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  chillar() {
    return "Chillido de Aguila";
  }
}

// Exporta las clases
export { Animal, Leon, Lobo, Oso, Serpiente, Aguila };
