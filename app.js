const bookList = document.querySelector('#book-list');

console.log('the parent node is:', bookList.parentNode);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br />The coolest bookshelf'