let step = 10;
function game(event){
    console.log(event.keyCode); 
    let key = event.keyCode;
    if(key == 32){
        console.log("Нажал 1 игрок")
    }
    else if (key == 38){
        console.log("Нажал 2 игрок")
    }
    else{
        alert("Игроки неправильно нажали на клавиатуру")
    }   



}
document.addEventListener("keyup", game);
