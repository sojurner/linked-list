var websiteTitle = document.querySelector('#website-title');
var websiteUrl = document.querySelector('#website-url');
var enterButton = document.querySelector('.enter-button');
var notReadCounter = document.querySelector('.not-read-counter');
var titleUrlForm = document.querySelector('.title-url-form');
var bookmarkList = document.querySelector('.bookmark-content-list');

var displayReadCounter = document.querySelector('.read-counter');
var displayNotReadCounter = document.querySelector('.not-read-counter');
var displayTotalCounter = document.querySelector('.total-counter');
var totalCounter = 0, readCounter = 0, notReadCounter = 0

var enableEnterButton = function() {
  if (websiteTitle !== '' && websiteUrl !== '') {
    enterButton.disabled = false;
  }
};


websiteUrl.addEventListener('keyup', enableEnterButton);

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
  <button title ="Read Button" class="read-button">Read</button>
  <button title ="Delete Button" class ="delete-button">Delete</button>`;
  bookmarkList.prepend(newBookmark);
  titleUrlForm.reset();
  totalCounter ++;
  bookmarkCounter();
};

function bookmarkCounter() {
  readCounter = document.querySelectorAll('.read').length
  totalCounter = document.querySelectorAll('.bookmark').length;
  notReadCounter = (totalCounter - readCounter);
  displayReadCounter.innerText = readCounter;
  displayTotalCounter.innerText = totalCounter;
  displayNotReadCounter.innerText = notReadCounter;
};
 

