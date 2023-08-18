var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Add Form Submit Event
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();

    // Get Input Value
    var newItem = document.getElementById('item').value;

    // Create New li Element
    var li = document.createElement('li');

    // Add Class
    li.className = 'list-group-item';

    // Add Text Node With Input Value
    li.appendChild(document.createTextNode(newItem));

    // Create Delete Button Element
    var delbtn = document.createElement('button');

    // Add Class
    delbtn.className = 'btn btn-danger btn-sm float-right delete';

    // Add Text Node
    delbtn.appendChild(document.createTextNode('X'));

    // Append delbtn to li
    li.appendChild(delbtn);

    // Append li to list
    itemList.appendChild(li);
}

// Delete Event
itemList.addEventListener('click',removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are You Sure ?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}