const bookList = document.querySelector('#book-list');

bookList.previousElementSibling.querySelector('p').innerHTML += '<br />The coolest bookshelf'

var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn) {
    btn.addEventListener('click', function(e) {

        const li = e.target.parentElement;

        //go up one node in order to remove the child (which is the element we're looking at)
        li.parentNode.removeChild(li);

    });
})