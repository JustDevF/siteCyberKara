
//définir l'année actuelle
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//ouvier et fermer les liens de nav 
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');


navToggle.addEventListener('click', () => {
    //1. méthode toggle    
    //linksContainer.classList.toggle('show-links');

    //2. methode getBoundingClientRect
    //- retourne la taille de l'élément et sa position 
    //permet de rajouter de liens dynamiquement
    const containerHeight = linksContainer.getBoundingClientRect().height;
    //renvoie la taille de tout les éléments de classe links
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight == 0 ) {
        linksContainer.style.height = `${linksHeight}px`;
    } 
    else {
        linksContainer.style.height = 0;
    }
    
});

//fixer les liens de nav sur la page 
 const navbar = document.getElementById("nav");

 //Gestionnaire d'événement scroll
 window.addEventListener("scroll", () => {
     //récupération de la taille dynamique de scroller 
     const scrollHeight = window.pageYOffset;
     //récupération de l'hauteur de l'élément de navbar
     const navHeight = navbar.getBoundingClientRect().height;

     //on compare la taille de scroller à la taille de l'élément
     if (scrollHeight > navHeight) {
         navbar.classList.add('fixed-nav');      
     } else {
         navbar.classList.remove('fixed-nav');
         
     }

     //afficher le bouton permettant d'aller tout en haut de la page html
     const toplink = document.querySelector('.top-link');

     if (scrollHeight > 500) {
         toplink.classList.add('show-link');     
     } 
     else {
        toplink.classList.remove('show-link');
     }

 });

 //smooth scroll
 const scrollLinks = document.querySelectorAll('.scroll-link');

 //pour chaque élément d'id scroll-link rajouter des actions dynamique   :
scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        //prevent defaut
        //La méthode  preventDefault() de l 'interface Event indique à l'agent utilisateur que si l'événement n'est pas traité explicitement, son action par défaut ne doit pas être prise en compte comme elle le serait normalement.
        e.preventDefault();
        //récupére dynamiquement l'id de l'élément courant
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        //calculer la taille 
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        //récupére la valeur de la postion de haut de l'élément courant 
        let position = element.offsetTop - navHeight;
        
        if (!fixedNav) {
            position = position -navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
          }

        window.scrollTo({
            left:0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});

/*Slider */
//cibles Dom 
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", () =>  {
  counter--;
  carousel();
});

function carousel() {
  // 1. working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }

  // 2. working with buttons

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";