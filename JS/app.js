"use strict"


const carousel = document.getElementById('.video__container')

new Glider(carousel, {
  slidesToShow: 2,
  slidesToScroll: 2,
  draggable: true
})