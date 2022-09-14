


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var dropdownlink = this.el.find(".dropdownlink");
    dropdownlink.on(
      "click",
      { el: this.el, multiple: this.multiple },
      this.dropdown
    );
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el
        .find(".submenuItems")
        .not($next)
        .slideUp()
        .parent()
        .removeClass("open");
    }
  };

  var accordion = new Accordion($(".accordion-menu"), false);
});

//Accordion  Start
$( function() {
  $( "#accordion" ).accordion();
} );
//Accordion  End
//Tabs  Start
$( function() {
  $( "#tabs" ).tabs();
} );
//Tabs  End
//Resizable  Start
$(function () {
  $("#messageArea").resizable();
});
//Resizable  End
//selectable  Start
$( function() {
  $( "#selectable" ).selectable();
} );
//selectable  end
$(document).ready(function () {
  //Mobile Menu Start
  $("#tanitimClose").click(function () {
    $("#tanitimKapsama").hide(1000);
  });

  //Mobile Menu End
});

  //Carousel Item Slıdetoggle  Start
$(document).ready(function () {

    $(".slideBtn").click(function(){
        $(".slideAciklama").slideToggle(1000);
    });

});
  //Carousel Item Slıdetoggle  End

 //Carousel Item img fadeIn  Start
 $(document).ready(function () {
  
      $(".carousel-img").fadeIn(500);
 

});

 //Carousel Item img fadeIn  End


$(document).ready(function () {

    //Topbar social media fadeOut fadeIn Start
    $(function () {
      $("#social-media").fadeOut(2000).fadeIn(2000);
    });
    //Topbar social media fadeOut fadeIn End

      //reklamCloseStart
      $(function () {
        $("#reklamClose").click(function(){
          $("#reklamKapsama").delay(1000).hide(500);
        })
        $("#reklamackapat").click(function(){
          $("#reklamimg").toggle(2000);
        })
      });
      //reklamClose End
    


  //Mobile Menu Start
  $(".menu-toggle").click(function () {
    $("nav").toggleClass("active");
  });
  //Mobile Menu End

  // ajax Search Form Start
  $("#searchh").keyup(function () {
    var wordSearch = $(this).val();
    $("searchhUl li").removeClass("underScoreColor");
    if ($.trim(wordSearch) != "") {
      $("#searchhUl li:contains('" + wordSearch + "')").addClass(
        "underScoreColor"
      );
    }
  });
  // ajax Search Form End

  // ajax  Start
/*   $(document).ajaxStart(function () {
    $("#ajaxLoading").css({ display: "inline-block" });
  });
  $(document).ajaxComplete(function () {
    $("#ajaxLoading").css({ display: "none" });
  });
  $(document).ajaxError(function () {
    $("#responseAjax").append("Hata meydana geldi");
  });
  $(document).click(function () {
    $("#responseAjax").load("serverResponse.txt");
  }); */
  // ajax  END

  // ordered Page Table Start
  $("tr:even").css({ "background-color": "grey" });
  // ordered Page Table End

  // Menu link title hover addClass Start
  $(".megamenu-content .mainwrap ul.main-menu li.menu-link a.link-title").hover(
    function () {
      $(this).addClass(
        ".megamenu-content .mainwrap ul.main-menu li.menu-link a.link-title:hover"
      );
    }
  );
  // Menu link title hover addClass End

  // carousel-caption text color css start
  $(".carousel-caption h5").css({
    "text-shadow":
      " 0 0 2px #182145 , 0 0 2px #182145 ,0 0 2px #182145 ,0 0 2px #182145  ",
  });
  $(".carousel-caption p").css({
    "text-shadow":
      " 0 0 2px #182145 , 0 0 2px #182145 ,0 0 2px #182145 ,0 0 2px #182145  ",
  });
  // carousel-caption text color css end
});




  //Ajax get product card start
function download(data) {
  window.open(data);
};
$(document).ready(function () {

  console.log("start")
  $.ajax({
      type: 'GET',
      url: 'https://picsum.photos/v2/list?page=1&limit=6',
      data: "",
      success: function (data) {
          console.log(data);
          myFunction(data);
      },
      error: function (xhr, status, error) {
          console.log(xhr);
      }
  });


  function myFunction(data) {
      for (var i = 0; i < data.length; i++) {
          $("#main-cards").append(`
          <div class="card text-center justify-content-center align-items-center vertical-align-center"
          onclick="download('${data[i].url}')">
          <div class="card-body text-center justify-content-center align-items-center vertical-align-center">
              <div class="book-image"
                  style="background-image: url(${data[i].download_url});">
              </div>

              <div class="card-title mt-2">
                  ${data[i].author}
              </div>

              <div class="card-price mb-3">
                  <strong> Ürün Fiyatı</strong>
              </div>
              <div class="card-partial-payment">
                  <strong>Taksitli Fiyat</strong> <br>3x2.326,84 TL
              </div>


              <div class="card-btn mt-3 mb-3">


                  <input type="number" class="card-step mt-4 mb-1" value="1">


                  <div class="d-flex justify-content-around p-2 card-icons ">
                      <div>
                          <span class="card-icons"> <i class="fas fa-shopping-cart active"></i></span>


                      </div>
                      <div> <span class="card-icons"> <i class="fas fa-heart" style=" padding: 16px;">
                              </i></span></div>
                      <div> <span class="card-icons"> <i class="fas fa-list"
                                  style="padding: 16px;"></i></span></div>
                  </div>


                  <a class="hover-butons-incele" title="Sepete Ekle">
              </div>
              <i class="fas fa-shopping-cart"></i>
              ÜRÜNÜ İNCELE
              </a>
          </div>


      </div>





          `);
          
          
          ;
      }
  }
})
  //Ajax get product card end

// jQuery Plugin: http://flaviusmatis.github.io/simplePagination.js/

var items = $(".list-wrapper .list-item");
var numItems = items.length;
var perPage = 4;

items.slice(perPage).hide();

$('#pagination-container').pagination({
items: numItems,
itemsOnPage: perPage,
prevText: "&laquo;",
nextText: "&raquo;",
onPageClick: function (pageNumber) {
  var showFrom = perPage * (pageNumber - 1);
  var showTo = showFrom + perPage;
  items.hide().slice(showFrom, showTo).show();
}
});



//Login Form validation start
$(function () {
  $("btnSubmit").click(function () {
    var email, phone, password, rePassword;
    email = $("#user_email").val();
    phone = $("#user_phone").val();
    password = $("#user_password").val();
    rePassword = $("#re_user_password").val();
    /* validation_email */
    /* validation_phone */
    /* validation_password */
    if (email == "") {
      $("#validation_email").html(
        "We'll never share your email with anyone else."
      );
    } else if (validateEmail(email) == false) {
      $("#validation_email").html("email");
    }
    if (phone == "") {
      $("#validation_phone").html(
        "We'll never share your phone with anyone else."
      );
    } else if (($.isNumeric == phone) == false) {
      $("#validation_phone").html("number");
    }

    if (password == "") {
      $("#validation_password").html(
        "We'll never share your password with anyone else."
      );
    }
    /* validation_email regex */
    function validateEmail(email) {
      var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return regex.test(email);
    }
  });
});

//Login Form validation end

//Login Modal Start
$(document).ready(function () {
  $("#btn_giris").click(function () {
    $("#myUye").modal();
  });
});
//Login Modal End

//Register Modal Start
$(document).ready(function () {
  $("#kayit_ol").click(function () {
    $("#myUyeOl").modal();
  });

});
//Register Modal End



 //dialog start
$(document).ready(function () {
  //dialog start
 
  
  $("#content_1").dialog({
    width: 600,
   autoOpen: true,
   dialogClass: "test",
   modal: true,
   responsive: true
   });
});



//forgot my password  Modal Start
$(document).ready(function () {
  $("#sifremi_unuttum").click(function () {
    $("#mySifreHatirlat").modal();
  });
});
//forgot my password  Modal End

//shopping card Modal Start
$(document).ready(function () {
  $("#shoppingBtn").click(function () {
    $("#shoppingCard").modal();
  });
});
//shopping card Modal End

//back to top start
$(function () {
  $(window).scroll(function () {
    if ($window.scrollTop() > 70) {
      $("#backTopButton").fadeIn();
    } else {
      $("#backTopButton").fadeOut();
    }
  });

  $("#backTopButton").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 1500);
  });
});
//back to top end

//text focusin
$(":text").focusin(function () {
  $(this).css("background-color", "#F24C4C ").css("color", "white");
});
//text blur
$(":text").blur(function () {
  $(this).css("background-color", "#F24C4C ").css("color", "white");
});
$(":text").setTimeout(() => {}, 5000);
//search autocomplete start
(function(){

  kelimeler=[
  "Javascript",
  "Bootstrap4",
  "JQuery",
  "Php",
  "Java"
  ];
  
  
  $("#listele").autocomplete({
  
    source:kelimeler,
    minLength:2
  
  });
  
  });
//search autocomplete end


