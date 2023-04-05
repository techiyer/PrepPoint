const typtext = document.querySelector('.typing');
const cursor = document.querySelector('.cursor')
const texts = ['Websites', 'Android App', 'Web App'];
const typedelay = 200;
const erasedelay = 100;
const newtextdelay = 1500;
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type(){
  if(count < texts[index].length){
    if(!cursor.classList.contains("type")) cursor.classList.add("type");
    typtext.textContent += texts[index].charAt(count);
    count ++;
    setTimeout(type, typedelay);
  }
  else{
    cursor.classList.remove("type");
    setTimeout(erase, newtextdelay);
  }
}
function erase(){
  if(count > 0){
    if(!cursor.classList.contains("type")) cursor.classList.add("type");
    typtext.textContent = texts[index].substring(0, count-1);
    count--;
    setTimeout(erase, erasedelay);
  }
  else{
    cursor.classList.remove("type");
    index++;
    if(index >= texts.length) index = 0;
    setTimeout(type, typedelay + 1100);
  }
}

document.addEventListener('DOMContentLoaded', function(){
  setTimeout(type, newtextdelay);
});
