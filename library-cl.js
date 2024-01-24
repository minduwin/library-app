// Function to show and close Dialog //
const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.showBtn');
const closeBtn = document.querySelector('.closeBtn');

showButton.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});

function clearInfo(){
    title.value  = '';
    author.value = '';
    pages.value = '';
}

const myLibrary = [];
let input = document.querySelector('.submitBtn');
input.addEventListener('click', addBooktoLibrary);

let divContainer = document.getElementById('boxCards');

//Constructor function
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Function to collect data from the form, using the constructor as a model
function addBooktoLibrary(event){
    event.preventDefault();
    let newBook = new Book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value
    );

    myLibrary.push(newBook);

    clearInfo();
    createBook();
}


function createBook() {
    // Create main div
    let newDiv = document.createElement('div');
    newDiv.classList.add('card');
    newDiv.setAttribute('id', 'card');

    //Create image
    let divImg = document.createElement('div');
    let newImg = document.createElement('img');
    divImg.classList.add('card-img')
    newImg.setAttribute('src', '—Pngtree—book color cartoon illustration_9418627.png');
    divImg.appendChild(newImg);

    //Create Elements
    let elemDiv = document.createElement('div');
    let h3Title = document.createElement('h3');
    let h3Author = document.createElement('h3');
    let h3Pages = document.createElement('h3');

    //Set Elements class
    elemDiv.classList.add('elementos');
    h3Title.classList.add('bookInfo');
    h3Author.classList.add('bookInfo');
    h3Pages.classList.add('bookInfo');

    //Iterate thru the Array
    let lastBook = myLibrary[myLibrary.length - 1];

    h3Title.appendChild(document.createTextNode(Object.values(lastBook)[0]));
    h3Author.appendChild(document.createTextNode(Object.values(lastBook)[1]));
    h3Pages.appendChild(document.createTextNode(Object.values(lastBook)[2] + ' Pages'));

    //Check and Delete button
    let mainDiv = document.createElement('div');
    let checkBtn = document.createElement('button');
    let delBtn = document.createElement('button');

    mainDiv.classList.add('buttons');
    checkBtn.classList.add('reading');
    delBtn.classList.add('deleting');

    checkBtn.innerText = 'Mark as Read';
    delBtn.innerText = 'Delete';

    mainDiv.appendChild(checkBtn);
    mainDiv.appendChild(delBtn);

    //Append Elements to Div
    newDiv.appendChild(divImg);
    
    elemDiv.appendChild(h3Title);
    elemDiv.appendChild(h3Author);
    elemDiv.appendChild(h3Pages);

    newDiv.appendChild(elemDiv)
    
    newDiv.appendChild(mainDiv);

    //Append Div to Container
    divContainer.appendChild(newDiv);
}

// Function to delete/remove books
window.addEventListener("load", function() {
    document.querySelector('#boxCards').addEventListener('click', (e) => {
        const divTarget = e.target;
        if(divTarget.classList.contains('deleting')){
            divTarget.closest('div.card').remove();
        }
    })
})

// Function to add wavy lines over read books 
window.addEventListener('load', function() {
    document.querySelector('#boxCards').addEventListener('click', (e) => {
        const elem = document.querySelectorAll('.bookInfo');
        const read = e.target;
        if(read.classList.contains('reading')){
            elem.forEach((el) => {
                el.closest('div.elementos').classList.toggle('wavyLine')
            })
        }
    })
})