const changer = document.querySelector('.changer');
const colorName = document.querySelector('h1');

const colorChange= function(){
    const a = Math.trunc(Math.random()*255+1);
    const b = Math.trunc(Math.random()*255+1);
    const c = Math.trunc(Math.random()*255+1);
    
    changer.style.backgroundColor =`rgb(${a},${b},${c})`;
    colorName.innerText = `rgb(${a},${b},${c})`
};

changer.addEventListener('click',colorChange);
