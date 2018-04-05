/**
 * Created by rich on 4/5/2018.
 */

function deleteItem() {

    if (confirm('Are you sure you want to delete this Item?')) {
        var delItem = this.parentNode;

        var parent = delItem.parentNode;

        parent.removeChild(delItem);
        window.alert("Item was deleted successful");
    }

}

function createButtons(item) {

    var list = document.getElementById('todo');
    var addItem = document.createElement('li');
    var deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', deleteItem);
    addItem.appendChild(document.createTextNode(item));
    addItem.appendChild(deleteButton);
    list.insertBefore(addItem, list.childNodes[0]);

    return list;
}

function addItem() {
        var txtInput = document.getElementById('todoInput').value;
        if(txtInput)
        {

            createButtons(txtInput);
            document.getElementById('todoInput').value ="";
        }

}

function loadList() {

    var todoItems = ["Oil Change", "Doctor Appointment", "Car Repair"];
    var i;

    for(i=0; i<todoItems.length; i++)
    {
        var item = todoItems[i];
       createButtons(item);
    }



}

