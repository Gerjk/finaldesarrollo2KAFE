var carouselWidth = $(".carousel-inner-kafes")[0].scrollWidth;

var cardWidth = $(".carousel-item-kafes").width();

var scrollPositionKafes = 0;

$(".control-siguiente-kafes").on("click", function () {
  if (scrollPositionKafes < carouselWidth - cardWidth * 4) {
    scrollPositionKafes += cardWidth;
    $(".carousel-inner-kafes").animate(
      { scrollLeft: scrollPositionKafes },
      600
    );
  }
});

$(".control-anterior-kafes").on("click", function () {
  if (scrollPositionKafes > 0) {
    scrollPositionKafes -= cardWidth;
    $(".carousel-inner-kafes").animate(
      { scrollLeft: scrollPositionKafes },
      600
    );
  }
});

var carouselWidthClientes = $(".carousel-inner-clientes")[0].scrollWidth;

var cardWidthClientes = $(".carousel-item-clientes").width();

var scrollPositionClientes = 0;

$(".control-siguiente-clientes").on("click", function () {
  if (scrollPositionClientes < carouselWidthClientes - cardWidthClientes * 4) {
    scrollPositionClientes += cardWidthClientes;
    $(".carousel-inner-clientes").animate(
      { scrollLeft: scrollPositionClientes },
      600
    );
  }
});

$(".control-anterior-clientes").on("click", function () {
  if (scrollPositionClientes > 0) {
    scrollPositionClientes -= cardWidthClientes;
    $(".carousel-inner-clientes").animate(
      { scrollLeft: scrollPositionClientes },
      600
    );
  }
});
