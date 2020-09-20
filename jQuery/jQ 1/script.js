$(".circle").css("background-color")
document.getElementsByClassName("circle")[0].style.backgroundColor;

// Написать команду .css() с установкой цвета заднего фона на оранжевый и скругление на 15%
$(".circle").css({
    "background-color": "orange",
    "border-radius": "15%"
})

$(".circle:nth-child(5)").css(
    {
        "background-color": "red"
    }
);


//1) Четные элементы красятся в зеленый цвет
$(".circle:nth-child(2n) ").css(
    {
        "background-color": "green"
    }
);
//2) Нечетные элементы красятся в цвет морской волный
$(".circle:nth-child(2n+1) ").css(
    {
        "background-color": "cyan"
    }
);
//3) Первый элемент красится в розовый цвет
$(".circle:nth-child(1) ").css(
    {
        "background-color": "pink"
    }
);
//4) Последний элемент красится в чёрный цвет
$(".circle:last-child").css(
    {
        "background-color": "black"
    }
);

//события в JQ
//click
    $(".circle").click(function (event) { 
    $(event.target).toggleClass("lime");
    });
    $(".circle:nth-child(2n+1)").click(function (event) { 
        $(event.target).toggleClass("odd");
        });

//собрать 12 сегментную змейку с окраском коралловый аспид 1 сегмент - голова, последний - хвост
//сегмент 75х75, скругленность головы и хвоста, остальных сегментов 15%
