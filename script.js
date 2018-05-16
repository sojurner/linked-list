var websiteTitle = document.querySelector('#website-title');
var websiteUrl = document.querySelector('#website-url');
var enterButton = document.querySelector('.enter-button');
var titleUrlForm = document.querySelector('.title-url-form');
var bookmarkList = document.querySelector('.bookmark-content-list');
var deleteButton = document.querySelector('.delete-button');

websiteUrl.addEventListener('keyup', enableEnterButton);
titleUrlForm.addEventListener('submit', bookmarkCreator); 
deleteButton.addEventListener('click', deleteBookmark);


function enableEnterButton() {
  if (websiteTitle !== '' && websiteUrl !== '') {
    enterButton.disabled = false;
  }
};

function handleBookmarkClick(event) {
  if (event.target.className === 'read-button') {
    newBookmark.classList.toggle('read');
    readCounter ++;
  }
  if (event.target.className === 'delete-button') {
    newBookmark.remove();
  }  
};

function bookmarkCreator() {
  event.preventDefault();
  newBookmark = document.createElement('article');
  newBookmark.setAttribute('class', 'bookmark');  
  newBookmark.innerHTML = 
  `<h2>${websiteTitle.value}</h2>
  <hr>
  <a target='_blank' href="${websiteUrl.value}">${websiteUrl.value}</a>
  <hr>
  <button title ="Read Button" class="read-button">Read</button>
  <button title ="Delete Button" class="delete-button">Delete</button>`;
  bookmarkList.append(newBookmark);
  titleUrlForm.reset();
  bookmarkCounter();
};

function bookmarkCounter() {
  var notReadCounter = document.querySelector('.not-read-counter');
  var totalCounter = document.querySelector('.total-counter');
  var readCounter = document.querySelector('.read-counter');
  readCount = document.querySelectorAll('.read').length
  totalCount = document.querySelectorAll('.bookmark').length;
  notReadCount = (totalCount - readCount);
  readCounter.innerText = readCount;
  totalCounter.innerText = totalCount;
  notReadCounter.innerText = notReadCount;
};