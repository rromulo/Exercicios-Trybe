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


let kDark = localStorage;
if (kDark.getItem('darkMode') == null){
    kDark.setItem('darkMode', false);
    
}

