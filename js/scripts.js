$(function () {
  $(".carousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
      $(".carousel").carousel("pause");
      $("#carouselButton").children("i").removeClass("fa-pause");
      $("#carouselButton").children("i").addClass("fa-play");
    } else {
      $(".carousel").carousel("cycle");
      $("#carouselButton").children("i").removeClass("fa-play");
      $("#carouselButton").children("i").addClass("fa-pause");
    }
  });
});


let  i = 0
while(i < 10){
  console.log("The number", `${i}`, "is less than 10")
  i++
}

$(function () {
  $("#reserveButton").click(function () {
    $("#reserveModal").modal("show");
  });
  $("#loginButton").click(function () {
    $("#loginModal").modal("show");
  });
});

