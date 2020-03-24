const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e) {
    //when we click on the ul, if the target has the class name of 'delete' then we do something

    if(e.target.className == 'delete') {

        //the button that we clicked's parent element
        const li = e.target.parentElement;
        //remove the child of this node, which is the li (as the parent is the ul which was defined first)
        list.removeChild(li);
    }
});