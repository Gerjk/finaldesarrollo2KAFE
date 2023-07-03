$(document).ready(function () {
  for (let i = 0; i < productos.length; i++) {
    $("#productos").append(
      '<div class="col card-producto">' +
        '<article class="card sc-product-item">' +
        '<img data-name="product_image" src="img/' +
        productos[i].Imagen +
        '" class="card-img-top" alt="' +
        productos[i].Nombre +
        '">' +
        '<div class="card-body">' +
        '<h3 data-name="product_name" class="card-title">' +
        productos[i].Nombre +
        "</h3>" +
        '<p data-name="product_desc" class="card-text">' +
        productos[i].Descripcion +
        "</p>" +
        '<input name="product_price" value="' +
        productos[i].Precio +
        '" type="hidden">' +
        '<input name="product_id" value="' +
        i +
        '" type="hidden" />' +
        '<p class="class-text">Precio: $' +
        productos[i].Precio +
        "</p>" +
        '<button class="sc-add-to-cart btn btn-primary">QUIERO</button>' +
        "</div>" +
        "</article>" +
        "</div>"
    );
  }

  $("#smartcart").smartCart({
    lang: {
      cartTitle: "Carrito de compra",
      checkout: "PAGAR",
      clear: "BORRAR",
      subtotal: "Subtotal:",
      cartRemove: "×",
      cartEmpty: "Carrito vacio!<br>Elegí tus productos",
    },
  });
});
