var key_name = document.getElementById("key-name")
var key_number = document.getElementById("key-number");


document.addEventListener("keydown",(e)=>{
    key_name.innerText = e.key;
    key_number.innerText = e.keyCode;
})
