function newElement(element) {
    return document.createElement(element);
}
let main = document.getElementById('principal');
main.style.textAlign='center';
main.style.backgroundColor='white';
main.style.color='black';

const buttonBG = newElement('button');
const buttonLH = newElement('button');

buttonBG.setAttribute('id','buttonBG');
buttonBG.innerText = 'Dark Mode';
main.appendChild(buttonBG);

let btnDark = document.getElementById('buttonBG');
btnDark.addEventListener('click',changeDarkMode)


let storage = localStorage;
if (storage.getItem('darkMode') == null){
    storage.setItem('darkMode', false);
    
}
function changeDarkMode(){
    if (storage.getItem('darkMode') == 'false'){
        storage.setItem('darkMode', true);
        console.log(storage.getItem('darkMode'))
    } else{
        storage.setItem('darkMode', false);
    }
    darkMode();
}
function darkMode(){
    console.log(storage.getItem('darkMode'))
    if(storage.getItem('darkMode') == 'false'){
        main.style.backgroundColor='white';
        main.style.color='black';
    } else {
        main.style.backgroundColor='black';
        main.style.color='white';
    }  
}
darkMode();

const buttonFS = newElement('button');

buttonFS.setAttribute('id','buttonFS');
buttonFS.innerText = 'Ajusta Fonte';
main.appendChild(buttonFS);

let btnFont = document.getElementById('buttonFS');

btnFont.addEventListener('click',changePX);



