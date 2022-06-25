    
const addButton = document.querySelector('#add');
const textInput = document.querySelector('#textInput');




addButton.addEventListener('click', () => {

    var tag = document.createElement("div");
    var text = document.createTextNode(textInput.value);
    tag.appendChild(text);
    var element = document.getElementById("toDo");
    element.appendChild(tag);
    tag.classList.add("to_do");


    var checkbox = document.createElement('input');
    checkbox.className = 'checkbox';
    checkbox.type = "radio";
    checkbox.value = "value";
    checkbox.class = "check";
    tag.appendChild(checkbox);

    checkbox.addEventListener('click', () => {
        tag.classList.add('done');
    });

    var deleteButton = document.createElement('button');
    deleteButton.className ='deleteButton';
    deleteButton.innerHTML = "Delete";
    tag.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        tag.remove();
    })
    

});



