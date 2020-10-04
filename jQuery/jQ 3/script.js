let img = $("<img>");
$(img).attr("src", "img/03.png");
$("body").append(img);

function generateField(size){
     //размер одной картинки 150х150px
     //вершина игрового поля = size * ширина картины +16
     //местополежение поля = (ширина экрана - ширина поля)/2
    let cards = new Array(size*size)
   cards.fill($("<img>").attr({
       "src": rubashka,
       "width": "150",
       "class": "card",
       "id": "rub"
   }))
   console.log(cards);
}
$('#field').css({
    "width" : size * "150" + "16",
    "position" : ("screenWidth" - "width")/"2"
});

$(img).attr("scr" , rubashka);
$("#field").prepend(img);



let size = $("#size").attr("value");
//событие клик для btn
$("#btn").click(function(event) { 
    size = $("#size").val(); 
    alert(size);
    if (size%2 == 0){
        generateField(size);
    }
    else{
        alert("НЕЧЕТНОЕ!!!!!!")
    }

});
