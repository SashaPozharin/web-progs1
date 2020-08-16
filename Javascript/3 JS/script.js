let step = 10;
function setCSS(element, rule, value){
    let css = window.getComputedStyle(element)[rule].replace("px", "");
    element.style[rule] = (parseInt(css) + value) + "px";
}
function finish(){
    let h1 = p1.style.height.replace("px", "");
    let h2 = p2.style.height.replace("px", "");
    let hr = window.getComputedStyle(fin)["margin-top"].replace("px", "");
    let finishLine = window.innerHeight - hr;
    if(parseInt(h1)>=parseInt(finishLine)){
        alert("победил 1 игрок");
        document.removeEventListener("keyup", game)
    }
    else if (parseInt(h2)>=parseInt(finishLine)){
        alert("победил 2 игрок");
        document.removeEventListener("keyup", game)
    }
    console.log(h1)
    console.log(h2)
    console.log(hr)
    console.log(finishLine);
    
}
function game(event){
    let key = event.keyCode;
    if(key == 32){
        let h1 = p1.style.height;
        h1 = h1.replace("px", "");
        h1 = parseInt(h1) + step;
        p1.style.height = h1 + "px";
        console.log("Нажал 1 игрок");
        
        
    }
    else if (key == 38){
        setCSS(p2, "height", step);
        console.log("Нажал 2 игрок");
    }
    else{
        alert("Игроки неправильно нажали на клавиатуру")
    } 
    finish();
} 



document.addEventListener("keyup", game);
