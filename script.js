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

function bookmarkCreator() {
  var newBookmark = document.createElement('article');
  newBookmark.classList.add('bookmark');  
  newBookmark.innerHTML = 
  `<h2>${websiteTitle.value}</h2>
   <hr>
   <a target='_blank' href="${websiteUrl.value}">${websiteUrl.value}</a>
   <hr>
   <button title = "Read Button" class = "read-button">Read</button>
   <button title = "Delete Button" class = "delete-button">Delete</button>`;
  bookmarkList.prepend(newBookmark);
  document.querySelector('form').reset();
};


//Events
//---------
//PHASE 1 
//---------
//clicking "enter" button to create bookmark
titleUrlForm.addEventListener('submit', function(e) {
  e.preventDefault();
});

enterButton.addEventListener('click', function() {
  bookmarkCreator();
});
//clicking "delete" to remove bookmark

//---------
//PHASE 2 
//---------
//valid url creates bookmark

//invalid url returns error 

//---------
//PHASE 3 
//---------
//disable/enable 

//card count reflects read/unread/total 

//clicking "read" button to increment 'read' counter
//unclicked "read" button adds to 'unread' counter
//'read' + 'unread'  = total counter 
function bookmarkCounter() {
  cardCount = document.queryselector('.bookmark').length;
  readCount = readBookmarks
}

//--------
//PHASE 4 
//--------
//clicking "clear" button to remove bookmarks clicked as "read"

