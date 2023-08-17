console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[5]);
console.log(document.forms);
console.log(document.links);
console.log(document.images);

// Get Element By Id
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'LIST ITEMS';
console.log(headerTitle.innerHTML);
headerTitle.innerText = 'LIST OF ITEMS';
var header = document.getElementById('main-header');
header.style.borderBottom = '2px solid black';

// Get Element By ClassName
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Mobiles';
items[1].style.fontWeight = 'bold';
items[1].style.color = 'green';
for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor = 'grey';
}

// Get Element By TagName
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[0]);
li[0].textContent = 'Clothes';
li[0].style.fontWeight = 'bold';
li[0].style.color = 'blue';
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor = 'lightgrey';
}

// Queryselector
var header = document.querySelector('#main-header');
header.style.borderBottom = '2px solid black';

var input = document.querySelector('input');
input.value = 'Bhuvnesh Jain';

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'lightyellow';

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color = 'red';

var seconditem = document.querySelector('.list-group-item:nth-child(3)');
seconditem.style.color = 'brown';

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = "Hey Bhuvi";

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'lightgrey';
    even[i].style.backgroundColor = 'white';
}