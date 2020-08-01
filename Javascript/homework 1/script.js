function setResult1(){
    let txt1 = inTxtA.value;
    divB.innerHTML = txt1;
}


btnA.addEventListener("click", setResult1);

function setResult2(){
    let txt2 = inTxtB.value;
    divA.innerHTML = txt2;
}


btnB.addEventListener("click", setResult2);