// Create a new list item when clicking on the "Add" button
function newElement() {
  var inputValue = document.getElementById("myInput").value;
  var li = document.createElement("li");
  var t = document.createTextNode(inputValue);

  if (event.keyCode === 13 && inputValue !== '') {
    document.getElementById("myUL").appendChild(li);
    li.appendChild(t);
    event.preventDefault();
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

