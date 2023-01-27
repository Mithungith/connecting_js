const btn = document.querySelector('button');
const colorName = document.querySelector('.colors')
const colorArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
const colorVal = function(e){
let val = '#';
for(let i=0;i<6;i++){
let randNum = Math.trunc(Math.random()*colorArr.length);
val += colorArr[randNum];
}
 document.querySelector('body').style.backgroundColor= `${val}`;
 colorName.innerText = `${val}`;
}
btn.addEventListener('click',colorVal);