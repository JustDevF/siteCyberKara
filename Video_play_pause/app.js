

//cibles DOM
const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');

btn.addEventListener('click', () => {
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        //La méthode HTMLMediaElement.play() pause la lecture du vidéo
        video.pause();
    }
    else {
        btn.classList.remove('slide');
        //La méthode HTMLMediaElement.play() essaie de commencer la lecture du média et renvoie une Promise qui est résolue quand la lecture a commencé avec succès, et est rejetée si la lecture ne peut commencer pour n'importe quelle raison
        video.play();
    }
});

//Fonctions gestionnaires d'événement
//Si tout marche bien est que la page est completement chargée alors on affiche pas le preloader
window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');

});