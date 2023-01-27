const btn = document.querySelector('button');
const colorName = document.querySelector('.colors');
const colorVal = function(a,b,c){
 a = Math.trunc(Math.random()*256);
 b = Math.trunc(Math.random()*256);
 c = Math.trunc(Math.random()*256);

 document.querySelector('body').style.backgroundColor= `rgb(${a},${b},${c})`;
 colorName.innerText = `rgb(${a},${b},${c})`;
}
btn.addEventListener('click',colorVal);