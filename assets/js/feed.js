// Obtener elementos del modal
var modal = document.querySelector('.modal'); // Modal en general
var modalImg = document.querySelector('.modal-content'); // Imagen dentro del modal
var modalCaption = document.querySelector('.modal-caption'); // Caption dentro del modal
var closeBtn = document.querySelector('.x');  // Botón de cierre
var span = document.querySelector('.carousel');  // Elemento que muestra el modal

// Obtener todas las imágenes con la clase 'card_exp'
var images = document.querySelectorAll('.card_exp');

// Cuando haces clic en una imagen
images.forEach(function(image, index) {
  image.onclick = function() {
    setTimeout(function() {
      span.style.display = "block";
    }, 100);
    
    span.style.opacity = "1"; // Mostrar la animación de apertura
    setTimeout(function() {
      modal.style.opacity = "1"; // Mostrar el modal
    }, 100);

    modal.style.display = "block"; // Mostrar el modal

    // Asignar la imagen y el caption al modal
    var imgSrc = image.querySelector('img').src;
    modalImg.src = imgSrc;
    
    var caption = image.querySelector('figcaption').textContent || "";
    modalCaption.textContent = caption;
  };
});

// Función para cerrar el modal cuando se hace clic en el botón de cierre (x)
closeBtn.onclick = function() {
  span.style.display = "none";
  span.style.opacity = "0";
  modal.style.opacity = "0";
  setTimeout(function() {
    modal.style.display = "none"; // Ocultar el modal
  }, 300);
};

// Botones para navegar entre las imágenes
var prevButton = document.querySelector('#prev-card');
var nextButton = document.querySelector('#next-card');

// Navegar a la imagen anterior
prevButton.addEventListener('click', function() {
  var currentIndex = Array.from(images).findIndex(function(img) {
    return img.querySelector('img').src === modalImg.src;
  });

  currentIndex--;
  if (currentIndex < 0) currentIndex = images.length - 1;

  // Mostrar la imagen anterior
  modalImg.src = images[currentIndex].querySelector('img').src;
  modalCaption.textContent = images[currentIndex].querySelector('figcaption').textContent;
});

// Navegar a la imagen siguiente
nextButton.addEventListener('click', function() {
  var currentIndex = Array.from(images).findIndex(function(img) {
    return img.querySelector('img').src === modalImg.src;
  });

  currentIndex++;
  if (currentIndex >= images.length) currentIndex = 0;

  // Mostrar la imagen siguiente
  modalImg.src = images[currentIndex].querySelector('img').src;
  modalCaption.textContent = images[currentIndex].querySelector('figcaption').textContent;
});

// Manejo de gestos táctiles para navegar entre las imágenes
var touchStartX = 0;
var touchEndX = 0;
var touchStartY = 0;
var touchEndY = 0;
var threshold = 50; // Umbral de desplazamiento en píxeles

modal.addEventListener('touchstart', function(event) {
  touchStartX = event.changedTouches[0].screenX;
  touchStartY = event.changedTouches[0].screenY;
}, false);

modal.addEventListener('touchend', function(event) {
  touchEndX = event.changedTouches[0].screenX;
  touchEndY = event.changedTouches[0].screenY;
  handleGesture();
}, false); 

function handleGesture() {
  var swiped = '';
  if (Math.abs(touchEndX - touchStartX) > threshold) {
    if (touchEndX < touchStartX) {
        swiped = 'left';
    }
    if (touchEndX > touchStartX) {
        swiped = 'right';
    }
  }
  if (Math.abs(touchEndY - touchStartY) > threshold) {
    if (touchEndY < touchStartY) {
        swiped = 'up';
    }
    if (touchEndY > touchStartY) {
        swiped = 'down';
    }
  }
  if (swiped === 'left') {
      nextButton.click();
  }
  if (swiped === 'right') {
      prevButton.click();
  }
  if (swiped === 'up' || swiped === 'down') {
      closeBtn.click();
  }
}