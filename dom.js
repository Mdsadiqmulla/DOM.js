// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.all[10]);
// document.all[10].textContent="hello";
// console.log(document.getElementById("header-title"));
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'hello'
// var items = document.getElementsById('items');
// items.style.weight = 'bold';
// items[2].style.background = 'green';
// console.log(items);


var list = document.getElementById("items");
var listItems = list.getElementsByTagName("li");
listItems[2].style.backgroundColor = "green";

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontWeight = "bold";
}



