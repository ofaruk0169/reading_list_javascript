const list = document.querySelector('#book-list ul');

//delete books
list.addEventListener('click', function(e) {
    
    //when we click on the ul, if the target has the class name of 'delete' then we do something
    if(e.target.className == 'delete') {

        //the button that we clicked's parent element
        const li = e.target.parentElement;
        //remove the child of this node, which is the li (as the parent is the ul which was defined first)
        list.removeChild(li);
    }
});

//add book list

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e) {

    e.preventDefault();
    //get whatever value with the 'value' function
    const value = addForm.querySelector('input[type="text"]').value;
    
    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to document
    //this appends each of the span tags to the li tag. Which is the general strucutre of the book list. The li tag needs appending to the ul tag also
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    //the ul was defined earlier and we need to append the created li element
    list.appendChild(li);
})

//hide books

//firstly grab the id for the checkbox 
const hideBox = document.querySelector('#hide');

//add a 'change' event listener, the function uses the 'checked' function that comes with the checkbox. If 'checked' we do one thing, display nothing.
//Else we dispaly the 'initial' value, 'blocked' also works
hideBox.addEventListener('change', function(e) {
    if(hideBox.checked) {
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }

})

//search filter for specific books

//first we must grab the search bar and query select the input field
const searchBar = document.forms['search-books'].querySelector("input");
//next we must add an eventListener which is the keyup event. Then to this we get the
//target value with the appropriate method and convert it to lowercase and store the result in "term"
searchBar.addEventListener("keyup", function(e) {
    const term = e.target.value.toLowerCase();
    //next grab all "li" tags. The "ul" tag was defined earlier, so we can use a getElemenht method to get the li tag
    const books = list.getElementsByTagName("li"); 
    
    //next we need to cycle through each of the "li" tags
    Array.from(books).forEach(function(book) {

        //within the loop we grab the first child element (which is the span)
        //within this span, we get the text content with the textContent method
        const title = book.firstElementChild.textContent;

        //Now we have to check if the "term" variable is within the "title" with a if check
        //indexOf will get the position of term in the title

        //if indexOf finds no value, it returns -1. If that is the case we display display as "none"
        if(title.toLowerCase().indexOf(term) != -1) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }

    })
})

//tabbed content 
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e) {
    if(e.target.tagName == "LI") {
        //dataset looks for data attributes, e.g in the html the "data-" -> data-target, so we pass "target" afterwards as so
        const targetPanel = document.querySelector(e.target.dataset.target);
         panels.forEach(function(panel) {
             if (panel == targetPanel) {
                 panel.classList.add('active');
             } else {
                 panel.classList.remove('active');
             }
         })
    }
})

