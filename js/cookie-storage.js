// Cookie Storage demo js
// only wy to view/update cookies is document.cookie object.
"use strict";

function do_first(){
    var button = document.getElementById("submit");
    button.addEventListener("click", save, false);
    display();
}

function save(){
    let key = document.getElementById("key").value;
    let value = document.getElementById("value").value;
    
    // Save into the cookie Storage
    if(key != "" && value != ""){
        setCookie(key, value, {
            'Domain':document.domain,
            'Path':document.documentURI,
            'max-age': new Date().toUTCString(),
            'sameSite': 'Lax'
          });
        // document.cookie =`${key}=${value};path=${document.documentURI};domain=${document.domain};expires=${new Date().toUTCString()};`;
        console.log(`cookie ${key}=${value} is saved.`);
    }else{
        alert("Key:"+key+" and value:"+value+" was passed!");
    }
    
    display();
}

function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // add other defaults here if necessary
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }
  
function display(){
    var display_data = document.getElementById("display_data");
    display_data.innerHTML = "";
    let all_cookies = document.cookie.split(";");
    let total_cookies = document.cookie.split(";").length;

    for(let i = 0; i < total_cookies ; i++){
        let cookieItem = all_cookies[i];
        let cookieName = cookieItem.split("=")[0];
        let cookieValue = cookieItem.split("=")[1];

        display_data.innerHTML += "<div>"+(i+1)+"). <b>"+cookieName+" : "+cookieValue+"</b> <img id=\""+cookieName+"\" alt=\"remove\" src=\"img/delete.png\" onclick=\"removeItem_cookie('"+cookieName.trim()+"')\"/></div><br/>";
        // console.log(display_data.innerHTML);
    }
    display_data.innerHTML += "<footer style=\"text-align:right;\">Total Cookies:"+total_cookies+"</footer>"
}

function clear(){
    let userConsent = confirm(`This will remove all of the cookies for this domain.\nDo you want to continue ?`)
    
    // TODO: This is bad change it!
    userConsent ? console.log("User consent:"+userConsent) : location.reload();

    let all_cookies = document.cookie.split(";");    
    for(let c in all_cookies){
        document.cookie = `${c}=;expires=${new Date(0).toUTCString()}`;
        console.log(`document.cookie \n ${document.cookie}`);
        display.innerHTML += document.cookie; 
    }

    //Reload the current page.
    location.reload();
}

function removeItem_cookie(iCookie){
    //Remove this particular cookie iCookie
    setCookie(iCookie, "", {
        'max-age': -1
      })
    location.reload();
}

window.addEventListener("load", do_first, false);