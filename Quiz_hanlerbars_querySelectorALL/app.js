//PArtie handlebars
const context = {
    questions: [
      {
        question: "Quelle différence entre carte de débit et carte de crédit ?",
        reponse: "Les cartes crédit sont également liées à votre compte courant mais à la différence des cartes débit, vos dépenses ne sont prélevées qu'en une seule fois, le dernier jour du mois ouvré. On les appellait auparavant cartes à débit différé.",
      },
      {
        question: "Quelles sont les cartes de crédit ?",
        reponse: "Une carte de crédit est associée à une réserve d'argent. Les cartes de crédit les plus courantes sont les cartes Visa et Mastercard. On peut utiliser une carte de crédit pour retirer de l'argent à un distributeur, ou bien pour régler des achats dans magasins.",
      },
      {
        question: "Pourquoi carte de crédit pour location voiture ?",
        reponse: "Lorsque vous louez une voiture, votre carte bancaire va vous servir à payer le prix de la location. Le loueur va également l'utiliser, au moment de prendre possession du véhicule, pour bloquer une caution, c'est-à-dire une somme destinée à le couvrir en cas de dommages ou de vol.",
      },
      {
        question: "Comment faire une demande de carte de crédit ?",
        reponse: "Pour commander une carte de crédit il vous faut d'avoir 18 ans. Si vous avez des dettes financières, c'est mieux de les régler avant de demander une carte. Un revenu minimum est parfois nécessaire à justifier pour l'application.",
      }     
    ]
  };

const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);
//affichez le code HTML compilé dans le navigateur.
const element = document.getElementById('information');
element.innerHTML = compiledHtml;

//Fin de partie handlerbars

//cibles DOM 
//séléctionner tous les éléments qui ont question-btn comme classe 
const btns = document.querySelectorAll(".question-btn");

//itérer et ajouter  un gestionnaire d'événement sur chaqu'un des éléments séléctionnés 
btns.forEach((btn) =>{
    //gest d'even 
    btn.onclick = (element) =>{
        //on récupére la classe de l'élément courant en itération
        const currentQuestion = element.currentTarget.parentElement.parentElement;
        //on chanque sa classe
        currentQuestion.classList.toggle("show-text");

    }
  }
);

