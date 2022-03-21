var myImage = 
document.querySelector('img');

myImage.onclick = function() {
    var mySrc = 
myImage.getAttribute('src');
    if(mySrc === 'images/ali.jpeg') {
        myImage.setAttribute 
    ('src', 'images/ali2.jpeg');
    } else {
        myImage.setAttribute
    ('src','images/ali.jpeg');
    }
}
var myButton = 
document.querySelector('button');
var myHeading =
document.querySelector('h1');
function setUserName() {
    var myName = prompt('Пожалуйста введи свое имя.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Величайший приветствует, ' + myName;
}

if(!localStorage.getItem('name'))
{
    setUserName();
} else {
  var storedName = 
  localStorage.getItem('name');
   myHeading.textContent = 'Величайший приветствует, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}