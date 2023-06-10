let count = 1;

document.getElementById("radio1").checked = true;




setInterval(function(){

nextImagem();

}, 3000)




function nextImagem(){

count++;

 if(count > 4){

 count = 1

 }



 document.getElementById("radio"+count).checked = true;




}








/*const carouselImages = document.querySelector('.carousel-images');

const carouselText = document.querySelector('.carousel-text');

const prevBtn = document.querySelector('.prev-button');

const nextBtn = document.querySelector('.next-button');




let currentIndex = 0;




function showImage() {

  carouselImages.style.transform = `translateX(-${currentIndex * 50}%)`;

  carouselText.style.transform = `translateX(-${currentIndex * 0}%)`;

}




prevBtn.addEventListener('click', () => {

  if (currentIndex === 0) {

    currentIndex = carouselImages.children.length - 3;

  } else {

    currentIndex--;

  }

  showImage();

});








nextBtn.addEventListener('click', () => {

  if (currentIndex === carouselImages.children.length - 3) {

    currentIndex = 0;

  } else {

    currentIndex++;

  }

  showImage();

});*/




/*// seleciona o elemento do carrossel

var carousel = document.querySelector('.carousel');




// seleciona as imagens do carrossel

var images = carousel.querySelectorAll('.carousel-images img');




// seleciona os botões de navegação do carrossel

var prevButton = document.querySelector('.prev-button');

var nextButton = document.querySelector('.next-button');




// inicia o índice atual como zero

var currentIndex = 0;




// adiciona um evento ao botão "anterior" que move o carrossel para a esquerda

prevButton.addEventListener('click', function() {

  currentIndex = Math.max(currentIndex - 1, 0);

  carousel.style.transform = 'translateX(' + (currentIndex * -100) + '%)';

});




// adiciona um evento ao botão "próximo" que move o carrossel para a direita

nextButton.addEventListener('click', function() {

  currentIndex = Math.min(currentIndex + 1, images.length - );

  carousel.style.transform = 'translateX(' + (currentIndex * -100) + '%)';

});*/







// selecionando os elementos necessários
const carouselImages = document.querySelector('.carousel-images');
const carouselButtons = document.querySelector('.carousel-buttons');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// definindo a largura da imagem e a quantidade de imagens que serão mostradas
const imageWidth = 540;
const imagesToShow = 3;

// definindo a posição inicial do carrossel
let position = 0;

// adicionando um evento de clique ao botão "anterior"
prevButton.addEventListener('click', () => {
  // se a posição for maior ou igual a 0, é possível mover o carrossel para a esquerda
  if (position >= 0) {
    position -= imageWidth * imagesToShow;
    carouselImages.style.transform = `translateX(${position}px)`;
  }
});

// adicionando um evento de clique ao botão "próximo"
nextButton.addEventListener('click', () => {
  // se a posição for menor do que a largura total das imagens menos a largura do carrossel, é possível mover o carrossel para a direita
  if (position <= -(carouselImages.offsetWidth - (imageWidth * imagesToShow))) {
    return;
  }
  position += imageWidth * imagesToShow;
  carouselImages.style.transform = `translateX(${position}px)`;
});


var imagens = document.getElementsByClassName("image-container");
for (var i = 0; i < imagens.length; i++) {
  imagens[i].addEventListener("mouseover", function() {
    this.classList.add("hover");
  });
  imagens[i].addEventListener("mouseout", function() {
    this.classList.remove("hover");
  });
}













// Configuração dos cards que apareceram nas imagens

var images = document.querySelectorAll(".carousel-images img");

images.forEach(function(img) {
  img.addEventListener("click", function() {
    var card = this.parentNode.querySelector(".card");
    card.style.display = "block";
  });

  img.addEventListener("mouseleave", function() {
    var card = this.parentNode.querySelector(".card");
    card.style.display = "none";
  });
});

var cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
  card.addEventListener("mouseleave", function() {
    this.style.display = "block";
  });
});


// itera sobre as imagens
images.forEach(function(image) {
  // adiciona um event listener para detectar quando o mouse passa sobre a imagem
  image.addEventListener('mouseover', function() {
    // exibe o card correspondente
    this.parentNode.querySelector('.card').style.display = 'block';
  });
  
  // adiciona um event listener para detectar quando o mouse deixa a imagem
  image.addEventListener('mouseout', function() {
    // oculta o card correspondente
    this.parentNode.querySelector('.card').style.display = 'none';
  });
});


















