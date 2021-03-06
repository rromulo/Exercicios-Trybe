function newElement(element) {
    return document.createElement(element);
}
let main = document.getElementById('principal');
main.style.textAlign='center';
main.style.backgroundColor='white';
main.style.color='black';

const buttonBG = newElement('button');

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



if (storage.getItem('fontSize') == null) {
    storage.setItem('fontSize', '16px')
}

function changePX(){
    if(storage.getItem('fontSize') == '16px') {
        storage.setItem('fontSize','23px');
    } else{
        storage.setItem('fontSize','16px');
    }
    sizeFont();
}

function sizeFont() {
    let paragrafo = document.querySelector('.texto')
    console.log(paragrafo)
    if(storage.getItem('fontSize') == '16px') {
        paragrafo.style.fontSize='16px';
    } else{
        paragrafo.style.fontSize='23px';
    }
}sizeFont()

const buttonLH = newElement('button');
buttonLH.setAttribute('id','buttonLH');
buttonLH.innerText = 'Ajustar Linha';
main.appendChild(buttonLH);

let btnLineheight = document.getElementById('buttonLH');
btnLineheight.addEventListener('click',changelineH)

if (storage.getItem('lineH') == null) {
    storage.setItem('lineH', '20px')
}

function changelineH(){
    if (storage.getItem('lineH') == '20px') {
        storage.setItem('lineH', '30px')
    } else {
        storage.setItem('lineH', '20px')
    }
    lineHeigh()
}

function lineHeigh() {
    let paragrafo = document.querySelector('.texto')
    if(storage.getItem('lineH') == '20px') {
        paragrafo.style.lineHeight='20px';
    } else{
        paragrafo.style.lineHeight='30px';
    }
}lineHeigh()