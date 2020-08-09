function getText(event){
    let text = event.target.innerHTML;
    console.log(text);
    setText(text)
}

function setText(txt){
    divB.innerHTML = txt;
}
document.body.addEventListener("click", getText);