var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Add Form Submit Event
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();

    // Get Input Value
    var newItem = document.getElementById('item').value;
    var newDescription = document.getElementById('description').value;

    // Create New li Element
    var li = document.createElement('li');

    // Add Class
    li.className = 'list-group-item';

    // Add Text Node With Input Value
    // li.appendChild(document.createTextNode(newItem));
    // Create and Append Item Name Span
    var nameSpan = document.createElement('span');
    nameSpan.className = 'item-name';
    nameSpan.textContent = newItem;
    li.appendChild(nameSpan);

    // Add Description Below Item Name
    // var smallElm = document.createElement('p');
    // smallElm.appendChild(document.createTextNode('-'+newDescription));
    // li.appendChild(smallElm);
    // Create and Append Description Span
    var desSpan = document.createElement('span');
    desSpan.className = 'item-desc';
    desSpan.textContent = ' ' + newDescription;
    li.appendChild(desSpan);

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

// Filter Event
var filter = document.getElementById('filter');
filter.addEventListener('keyup',filterItem);

function filterItem(e){
    
    // Convert Text To Lower Case
    var text = e.target.value.toLowerCase();

    // Get List
    var items = itemList.getElementsByTagName('li');

    // Convert To An Array
    Array.from(items).forEach(function(item){
        var itemNameElem = item.querySelector('.item-name');
        var itemDescriptionElem = item.querySelector('.item-desc');

        var itemName = itemNameElem ? itemNameElem.textContent : "";
        var itemDescription = itemDescriptionElem ? itemDescriptionElem.textContent : "";
        
        if (itemName.toLowerCase().indexOf(text) != -1 || itemDescription.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}