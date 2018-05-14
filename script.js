//Variables
var websiteTitle = document.querySelector('#website-title');
var websiteUrl = document.querySelector('#website-url');
var enterButton = document.querySelector('.enter-button');
var displayReadCounter = document.querySelector('.read-counter');
var displayNotReadCounter = document.querySelector('.not-read-counter');
var displayTotalCounter = document.querySelector('.total-counter');
var notReadCounter = document.querySelector('.not-read-counter');
var titleUrlForm = document.querySelector('.title-url-form');
var bookmarkList = document.querySelector('.bookmark-content-list');

//Functions

var disableEnterButton = function() {
  if (websiteTitle === '' || websiteUrl === '') {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  }
};

websiteTitle.addEventListener('keyup', disableEnterButton);

websiteUrl.addEventListener('keyup', disableEnterButton);

titleUrlForm.addEventListener('submit', bookmarkCreator); 

function bookmarkCreator() {
  event.preventDefault();
  var newBookmark = document.createElement('article');
  newBookmark.classList.add('bookmark');  
  newBookmark.innerHTML = 
  `<h2>${websiteTitle.value}</h2>
  <hr>
  <a target='_blank' href="${websiteUrl.value}">${websiteUrl.value}</a>
  <hr>
  <button title ="Read Button" class   ="read-button">Read</button>
  <button title ="Delete Button" class ="delete-button">Delete</button>`;
  bookmarkList.prepend(newBookmark);
  titleUrlForm.reset();
};

function bookmarkCounter() {
  cardCount = document.queryselector('.bookmark').length;
  readCount = readBookmarks
}