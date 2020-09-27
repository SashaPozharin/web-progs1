$(".circle").css({
    "background-color": "black",
    "border-radius": "25%",
  });

  $(".circle:nth-child(2n+1)").css({
    "background-color": "red",
  });
  
  $(".circle:nth-child(2n)").css({
    "background-color": "yellow",
  });

  $(".circle:nth-child(1)").css({
    "background-color": "black",
  });
  
  $(".circle:nth-child(5)").css({
    "background-color": "black",
  });
  
  $(".circle:nth-child(9)").css({
    "background-color": "black",
  });
  
  $(".circle:nth-child(2n)").click(function (event) {
    $(event.target).toggleClass("clicked");
  });