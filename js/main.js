$(document).ready(function(){
    
    // Toggle on click JQuery code
    $('.nav-icon').click(function(){
        $('.nav-icon').toggleClass('active');
        $('.sidebar').toggleClass('active');
        $('.nav-container').toggleClass('nbar-toggle');
        $('.nav-icon').toggleClass('ham-fix');
    });
    
    // Images size change on mouseenter
    $(".rooms-list").addClass("loaded");
    var l = $(".rooms .li").length;
    for (var i = 0; i <= l; i++) {
        var room_list = $(".rooms .li").eq(i);
        var room_img_height = $(room_list).find(".room > img").innerHeight();
        $(room_list).css({
            "height": room_img_height
        });
        $(room_list).find(".room > img").css({
            "width": "200%"
        });
    }
    $(".rooms li.start").addClass("active");
    $(".rooms li").on("mouseenter", function(){
        $(".rooms li").removeClass("active");
        $(this).addClass("active");
    });
    
    // Datepicker JQuery Plugin Code
    $("#datepicker").datepicker();
    $("#datepicker2").datepicker();
    $("#datepicker3").datepicker();
    $("#datepicker4").datepicker();
    $("#datepicker5").datepicker();
    $("#datepicker6").datepicker();
    
    // Checking If Text Fields Are Empty
    
    $('.form-control').each(function () {
        floatedLabel($(this));
    });
    $('.form-control').on('input', function () {
        floatedLabel($(this));
    });
    function floatedLabel(input) {
        var $field = input.closest('.form-group');
        if (input.val()) {
            $field.addClass('input-not-empty');
        } else {
            $field.removeClass('input-not-empty');
        }
    }
    
    // Hide Show Function for Resorts.html
    // For Dubai
    $("#dubai").click(function(){
        $(".blog-cards").hide();
        $(".myCustonPag").hide();
    });
    $("#dubai").click(function(){
        $(".dubai").show();
    });
    
    // For London
    $("#london").click(function(){
        $(".blog-cards").hide();
        $(".myCustonPag").hide();
    });
    $("#london").click(function(){
        $(".london").show();
    });
    
    // For China
    $("#china").click(function(){
        $(".blog-cards").hide();
        $(".myCustonPag").hide();
    });
    $("#china").click(function(){
        $(".china").show();
    });
    
    // For Canada
    $("#canada").click(function(){
        $(".blog-cards").hide();
        $(".myCustonPag").hide();
    });
    $("#canada").click(function(){
        $(".canada").show();
    });
    
    // For Egypt
    $("#egypt").click(function(){
        $(".blog-cards").hide();
        $(".myCustonPag").hide();
    });
    $("#egypt").click(function(){
        $(".egypt").show();
    });
    
    // For Paris
    $("#paris").click(function(){
        $(".blog-cards").hide();
        $(".myCustonPag").hide();
    });
    $("#paris").click(function(){
        $(".paris").show();
    });
    
    // For Pagination
    var HZperPage = 5,//number of results per page
    HZwrapper = 'paginationTable',//wrapper class
    HZlines   = 'blog-cards',//items class
    HZpaginationId ='pagination-container',//id of pagination container
    HZpaginationArrowsClass = 'paginacaoCursor',//set the class of pagi
    HZpaginationColorDefault =  'transparent',//default color for the pagination numbers
    HZpaginationColorActive = 'rgba(0, 0, 0, 0.5)', //color when page is clicked
    HZpaginationCustomClass = 'customPagination'; //custom class for styling the pagination (css)

    function paginationShow(){if($("#"+HZpaginationId).children().length>8){var a=$(".activePagination").attr("data-valor");if(a>=4){var i=parseInt(a)-3,o=parseInt(a)+2;$(".paginacaoValor").hide(),exibir2=$(".paginacaoValor").slice(i,o).show()}else $(".paginacaoValor").hide(),exibir2=$(".paginacaoValor").slice(0,5).show()}}paginationShow(),$("#beforePagination").hide(),$("."+HZlines).hide();for(var tamanhotabela=$("."+HZwrapper).children().length,porPagina=HZperPage,paginas=Math.ceil(tamanhotabela/porPagina),i=1;i<=paginas;)$("#"+HZpaginationId).append("<p class='paginacaoValor "+HZpaginationCustomClass+"' data-valor="+i+">"+i+"</p>"),i++,$(".paginacaoValor").hide(),exibir2=$(".paginacaoValor").slice(0,5).show();$(".paginacaoValor:eq(0)").css("background",""+HZpaginationColorActive).addClass("activePagination");var exibir=$("."+HZlines).slice(0,porPagina).show();$(".paginacaoValor").on("click",function(){$(".paginacaoValor").css("background",""+HZpaginationColorDefault).removeClass("activePagination"),$(this).css("background",""+HZpaginationColorActive).addClass("activePagination");var a=$(this).attr("data-valor"),i=a*porPagina,o=i-porPagina;$("."+HZlines).hide(),exibir=$("."+HZlines).slice(o,i).show(),"1"===a?$("#beforePagination").hide():$("#beforePagination").show(),a===""+$(".paginacaoValor:last").attr("data-valor")?$("#afterPagination").hide():$("#afterPagination").show(),paginationShow()}),$(".paginacaoValor").last().after($("#afterPagination")),$("#beforePagination").on("click",function(){var a=$(".activePagination").attr("data-valor"),i=parseInt(a)-1;$("[data-valor="+i+"]").click(),paginationShow()}),$("#afterPagination").on("click",function(){var a=$(".activePagination").attr("data-valor"),i=parseInt(a)+1;$("[data-valor="+i+"]").click(),paginationShow()}),$(".paginacaoValor").css("float",""),$("."+HZpaginationArrowsClass).css("float","");
})

// Navbar Style change on scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 250) {
        document.getElementById("nav-select").style.background = "rgba(14, 9, 35, 0.9)";
    } else {
        document.getElementById("nav-select").style.background = "rgba(255, 255, 255, 0)";
    }
}

// Check if browser supports Session Storage
if (typeof(Storage) !== "undefined") {
    document.getElementById("result").innerHTML = sessionStorage.getItem("fullname");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

// Input Style CSS
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');
        
        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
});

// Book Now Title Script
if (typeof(Storage) !== "undefined") {
    document.getElementById("result-show-here").innerHTML = sessionStorage.getItem("title");
} else {
    document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
}

// Session Storage Functions
function a(){
    var a = document.getElementById("a").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", a);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function b(){
    var b = document.getElementById("b").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", b);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function c(){
    var c = document.getElementById("c").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", c);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function d(){
    var d = document.getElementById("d").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", d);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function e(){
    var e = document.getElementById("e").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", e);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function f(){
    var f = document.getElementById("f").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", f);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function g(){
    var g = document.getElementById("g").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", g);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function h(){
    var h = document.getElementById("h").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", h);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function i(){
    var i = document.getElementById("i").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", i);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function j(){
    var j = document.getElementById("j").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", j);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function k(){
    var k = document.getElementById("k").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", k);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function l(){
    var l = document.getElementById("l").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", l);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function m(){
    var m = document.getElementById("m").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", m);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function n(){
    var n = document.getElementById("n").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", n);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function o(){
    var o = document.getElementById("o").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", o);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function p(){
    var j = document.getElementById("p").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", p);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function q(){
    var j = document.getElementById("q").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", q);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
} function r(){
    var r = document.getElementById("r").textContent;
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("title", r);
        return false;
    } else {
        document.getElementById("result-show-here").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}