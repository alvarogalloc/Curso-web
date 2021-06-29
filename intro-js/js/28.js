// Clases

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  formatearProducto() {
    return `El producto ${this.nombre} tiene el precio de $${this.precio}`;
  }

  obtenerPrecio() {
    return this.precio;
  }
}

// const producto = new Producto('Laptop', 10000);
// const producto2 = new Producto('iPhone', 8000);

/*
 * super llama al constructor de la
 * clase padre con los argumentos necesarios
 * */
class Libro extends Producto {
  constructor(nombre, precio, autor, isbn) {
    super(nombre, precio);
    this.autor = autor;
    this.isbn = isbn;
  }

  obtenerPrecio() {
    return `${super.obtenerPrecio} y esta disponible`;
  }

  formatearProducto() {
    return `El libro ${this.nombre} fue escrito por ${this.autor} y su isbn es ${this.isbn}`;
  }
}

const libro1 = new Libro(
  'El señor de las moscas',
  300,
  'William Golding',
  '1532-g123-3432',
);

console.log(libro1.formatearProducto());
