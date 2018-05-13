//Variables
var websiteTitle = document.querySelector('.input-website-title');
var websiteUrl = document.querySelector('.website-url');
var enterButton = document.querySelector('.enter-button');
var displayReadCounter = document.querySelector('.read-counter');
var dispalyNotReadCounter = document.querySelector('.not-read-counter');
var displayTotalCounter = document.querySelector('.total-counter');
var notreadCounter = document.querySelector('.not-read-counter');
var bookmarkList = document.querySelector('.bookmark-content-list');
//Functions


function bookmarkCreator() {
  var bookmarkList = document.querySelector('.bookmark-content-list');
  var newBookmark = document.createElement('article');
  newBookmark.classList.add('bookmarks');  
  newBookmark.innerHTMl =
   `<h2>${websiteTitle.value}</h2>
    <hr>
    <a target='_blank' href="${websiteUrl.value}">${websiteUrl.value}</a>
    <hr>
      <button title = "Read Button" class = "read-button">Read</button>
      <button title = "Delete Button" class = "delete-button">Delete</button>`
  bookmarkList.prepend(newBookmark);
  document.querySelector('form').reset();
};
//Events
//---------
//PHASE 1 
enterButton.addEventListener('click', function() {
  bookmarkCreator();
  console.log(testing);
});
//---------
//clicking "enter" button to create bookmark

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

//--------
//PHASE 4 
//--------
//clicking "clear" button to remove bookmarks clicked as "read"

