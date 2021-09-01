
//Tableau d'objet
//contient toutes les informations variables ou changement de la structure HTML Views
const reviews = [
    {
        id:1,
        name: "Justin katasi",
        job: "Developpeur Web",
        img: "./img/img1.jpg",
        text: "Je suis bébé meggings twee santé goth +1. Droits de la bicyclette chartreuse de curcuma avant qu'ils ne soient épuisés pop-up chambray. Shaman humblebrag livre de coloriage mariné salvia à capuche, porter un toast de quatre dollars pressé à froid tous les jours",

    },
    {
        id:2,
        name: "Alex katasi",
        job: "Boss",
        img: "./img/img2.jpg",
        text: "Helvetica artisan kinfolk thundercats bouteille bleue lumbersexual. Perturber le gastropub glacé profond v vice franzen enfer de brooklyn twee émail broche mode axe.photo stand short en jean artisan narval.",

    },
    {
        id:3,
        name: "Jackson katasi",
        job: "Web designer",
        img: "./img/img3.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",

    },
    {
        id:4,
        name: "Dieu katasi",
        job: "Stagiaire ",
        img: "./img/img4.jpg",
        text: "Edison bulbe a mis un oiseau dessus humblebrag, marfa pok pok heirloom fashion hache cray stumptown venmo en fait seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",

    }


]

//Cible DOM 
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

//Cible déclencheurs DOM 
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//Définir l'élément de départ du tableau de objet preview
//0 car les élément du tableau commencent par 0
let currentItem = 0;

//charger l'élément initial
//L’évènement DOMContentLoaded est émis lorsque le document HTML initial a été complètement chargé et analysé, sans attendre…
//window représente une fenêtre contenant un document DOM en cours, pratigue pour déboguer 
window.addEventListener('DOMContentLoaded', () =>{
    /*
    //item répresente objet courant dans le tableau de view
    const item = reviews[currentItem];
    //On définit les propriétés source d'éléments au propriétés de l'objet view  
    img.src = item.img;
    //représente le contenu textuel d'un nœud et de ses descendants
    //meilleures performances par rapport à innerHTML car le texte n'est pas analysé en HTML 
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    */
    showPersonne();
    console.log('works');

});


//Répresente un objet view
//prend en param un objet view
const showPersonne = () => {
    //item répresente objet courant dans le tableau de view
    const item = reviews[currentItem];
    //On définit les propriétés source d'éléments au propriétés de l'objet view  
    img.src = item.img;
    //représente le contenu textuel d'un nœud et de ses descendants
    //meilleures performances par rapport à innerHTML car le texte n'est pas analysé en HTML 
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    console.log('ShowPersonne works');
}

//Fonction gestionnaire  d'événement
const nextPersonne = () =>{
    //on incrémente le tableau d'objet view pour itérer 
    currentItem++;
    //Condition pour limiter l'itération du tabteau reviews car aller au delà des éléments présents ferait une erreur 
    //-1 car zero n'est pas sup à zéro
    if (currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPersonne();
}

//Fonction gestionnaire  d'événement
const prevPersonne = () =>{
    //on décrémente le tableau d'objet view pour itérer 
    currentItem--;
    //Condition pour limiter l'itération du tabteau reviews car aller au dessu des éléments présents ferait une erreur 
    if (currentItem < 0) {
        currentItem = reviews.length -1;
    }
    showPersonne();
    
}

//Fonction gestionnaire  d'événement
const randamPersonne = () =>{
    currentItem = Math.floor(Math.random() * reviews.length);
    showPersonne();
}

//Afficher d'autres personne
//Gestionnaire d'événement 
nextBtn.addEventListener('click', nextPersonne);
prevBtn.addEventListener('click', prevPersonne);
randomBtn.addEventListener('click', randamPersonne);