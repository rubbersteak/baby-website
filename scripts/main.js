let myImage = document.querySelector('img');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/blaziken.jpeg') {
        myImage.setAttribute('src','images/torchic.png');
        myHeading.textContent = 'This is a Torchic'
    } else {
        myImage.setAttribute('src','images/blaziken.jpeg');
        myHeading.textContent = 'This is a Blaziken'
    }
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Please enter a Pokemon.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'This is a ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'You\'ve already seen a ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}