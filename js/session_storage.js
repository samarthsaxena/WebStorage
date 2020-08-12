// Session Storage demo js
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
        sessionStorage.setItem(key,value);
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
    for(var i = 0; i < sessionStorage.length ; i++){
        var k = sessionStorage.key(i);
        var v = sessionStorage.getItem(k);

        display_data.innerHTML += "<div>"+(i+1)+"). <b>"+k+" : "+v+"</b> <img id=\""+k+"\" alt=\"remove\" src=\"img/delete.png\" onclick=\"removeItem_sessionStorage('"+k.trim()+"')\"/></div><br/>";
        // console.log(display_data.innerHTML);
    }
    display_data.innerHTML += "<footer style=\"text-align:right;\">Total items:"+sessionStorage.length+"</footer>"
}

function removeItem_sessionStorage(sItem){
    let key = sItem;
    sessionStorage.removeItem(key);
    key = "";
    location.reload();
}

function clear(){
    sessionStorage.clear();
    location.reload();
}
window.addEventListener("load", do_first, false);