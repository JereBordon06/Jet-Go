/*  const contenedorTarjetas = document.getElementById("productos-container");



function crearTarjetasProductosInicio(productos){
  console.log(productos, contenedorTarjetas)
  productos.forEach(producto => {
    const nuevoArticulo = document.createElement("div");
    nuevoArticulo.classList = "tarjeta-producto"
    nuevoArticulo.innerHTML = `
    <img src=".img/productos${producto.id}.jpg" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
   contenedorTarjetas.append(nuevoArticulo);
nuevoArticulo.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))

  });
}
crearTarjetasProductosInicio(productos); 
 */