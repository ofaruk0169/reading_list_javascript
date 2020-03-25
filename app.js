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