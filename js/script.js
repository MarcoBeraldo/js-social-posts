// ! Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// ! Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali, inventatele*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder 
// ad es. Unsplash (https://unsplash.it/300/300?image=3)*

// !Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, 
// stampiamo i post del nostro feed.

// !Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone 
// e incrementiamo il counter dei likes relativo.

// ! ****BONUS****
//  1. Formattare le date in formato italiano (gg/mm/aaaa)

//  2. Gestire l'assenza dell'immagine profilo con un elemento di fallback 
//  che contiene le iniziali dell'utente (es. Luca Formicola  => LF).

//  3. Al click su un pulsante "Mi Piace" di un post, 
//  se abbiamo già cliccato dobbiamo decrementare il contatore 
//  e cambiare il colore del bottone.


const posts = [
    {
        id: 1,
        authorName: "Marco Beraldo",
        authorImage: "shaggy.jpg",
        date: "07/06/2022",
        text: "lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum",
        postImage: "tree.jpg",
        likes: 10,
    },
    {
        id: 2,
        authorName: "John Wayne",
        authorImage: "girl.jpg",
        date: "07/07/2022",
        text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        postImage: "mountain.jpg",
        likes: 20,
    },
    {
        id: 3,
        authorName: "Bianca Neve",
        authorImage: "snowwhite.jpg",
        date: "08/06/2022",
        text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        postImage: '',
        likes: 30,
    },
]
const container = document.getElementById('container');

let postContent = ''
for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    postContent += `<div class="post">
    <div class="post__header">
    <div class="post-meta">
    <div class="post-meta__icon">
    <img class="profile-pic" src="img/${post.authorImage}" alt="Phil Mangione" />
    </div>
    <div class="post-meta__data">
    <div class="post-meta__author">${post.authorName}</div>
    <div class="post-meta__time">${post.date}</div>
    </div>
    </div>
    </div>
    <div class="post__text">
    ${post.text}
    </div>
    <div class="post__image">
    <img src="img/${post.postImage}" alt="" />
    </div>
    <div class="post__footer">
    <div class="likes js-likes">
    <div class="likes__cta">
    <a class="like-button js-like-button" href="#" data-postid="${post.id}">
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    <span class="like-button__label">Mi Piace</span>
    </a>
    </div>
    <div class="likes__counter">Piace a <b id="like-counter-${i}" class="js-likes-counter">${post.likes}</b> persone</div>
    </div>
    </div>
    </div>
    </div>`

    container.innerHTML = postContent;




}
const likeButtons = document.getElementsByClassName("like-button");
for (let j = 0; j < likeButtons.length; j++)
    likeButtons[j].addEventListener("click", function () {
        const likeCounter = document.getElementById(`like-counter-${j}`)

        if (likeButtons[j].classList.contains("text-blue")) likeCounter.innerHTML = `${posts[j].likes}`
        else likeCounter.innerHTML = `${posts[j].likes + 1}`;
        likeButtons[j].classList.toggle('text-blue')
    })
