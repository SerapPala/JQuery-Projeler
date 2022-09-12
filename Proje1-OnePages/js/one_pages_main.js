function goster() {
  document.getElementById("metinalani").style.display = "block";
}

function gizle() {
  document.getElementById("metinalani").style.display = "none";
}

function goster2() {
  document.getElementById("metinalani2").style.display = "block";
}

function gizle2() {
  document.getElementById("metinalani2").style.display = "none";
}
function goster3() {
  document.getElementById("metinalani3").style.display = "block";
}

function gizle3() {
  document.getElementById("metinalani3").style.display = "none";
}
function goster4() {
  document.getElementById("metinalani4").style.display = "block";
}

function gizle4() {
  document.getElementById("metinalani4").style.display = "none";
}
$(document).ready(function() {
  $(".accordion").on("click", function() {
    $(this).toggleClass("active");
    $(this).next().slideToggle(200);
  });
});

$(function () {
  $("#tabs").tabs();
});

$(function () {
  $("#resizable").resizable();
});


$(function () {
  $("#dialogButton").click(function () {
    $("#dialog").dialog(open);
  });
});

$(function () {
 var autoComplete = [
    "HTML5","css3","js","Jquery"

];

$('#tags').autoComplete({
    source:autoComplete
});
});
