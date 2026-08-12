const roll =document.getElementById("roll");
const mylabel1=document.getElementById("mylabel1");
const mylabel2=document.getElementById("mylabel2");
const mylabel3=document.getElementById("mylabel3");

const min =1;
const max =6;
let rn1;
let rn2;
let rn3;

roll.onclick =function(){
    rn1 = Math.floor(Math.random()*max)+min;
    rn2= Math.floor(Math.random()*max)+min;
    rn3 = Math.floor(Math.random()*max)+min;
    mylabel1.textContent =rn1;
    mylabel2.textContent =rn2;
    mylabel3.textContent =rn3;
}
