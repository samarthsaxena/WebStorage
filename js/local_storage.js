// Local storage demo js 
// localStorage
// localStorage.setItem("key","value")
// localStorage.getItem("key")
// localStorage.removeItem("key")
// localStorage.length  -> return length integer

"use strict";

function do_first(){
    var button = document.getElementById("submit");
    button.addEventListener("click", save, false);
    display();
}

function save(){
    var key = document.getElementById("key").value;
    var value = document.getElementById("value").value;
    
    // Save into the sessionStorage
    if(key != "" && value != ""){
        localStorage.setItem(key,value);
    }else{
        alert("Key:"+key+" and value:"+value+" was passed!");
    }
    
    display();
    key.value = "";
    value.value = "";
}

function display(){
    var display_data = document.getElementById("display_data");
    display_data.innerHTML = "";
    for(var i = 0; i < localStorage.length ; i++){
        var k = localStorage.key(i);
        var v = localStorage.getItem(k);

        display_data.innerHTML += "<div>"+(i+1)+"). <b>"+k+" : "+v+"</b> <img id=\""+k+"\" alt=\"remove\" src=\"img/delete.png\" onclick=\"removeItem_localStorage('"+k.trim()+"')\"/></div><br/>";
        // console.log(display_data.innerHTML);
    }
    display_data.innerHTML += "<footer style=\"text-align:right;\">Total items:"+localStorage.length+"</footer>"
}

function clear(){
    localStorage.clear();
    location.reload();
}

function removeItem_localStorage(lItem){
    let key = lItem;
    localStorage.removeItem(key);
    key = "";
    location.reload();
}

window.addEventListener("load", do_first, false);