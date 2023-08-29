# assignment-11

# Hosted Link :- https://rohitdhawale07.github.io/assignment-11/

This is simple project of creating a web page which will return a perticular no when pressed any keyboard key.

In main JAVASCRIPT part, we added a event listener to the whole document and added event "keydown" .
After pressing any key call back function will return a number of that key.

## JAVASCRIPT
```
var key_name = document.getElementById("key-name")
var key_number = document.getElementById("key-number");


document.addEventListener("keydown",(e)=>{
    key_name.innerText = e.key;
    key_number.innerText = e.keyCode;
})
```
