var menuIconBgColors = document.querySelector('.menu-icon').querySelectorAll('span');
var menuIconBgColor1 = menuIconBgColors[0];
var menuIconBgColor2 = menuIconBgColors[1];

var p1      = document.querySelector(".project-page_container-1");
var p2      = document.querySelector(".project-page_container-2");
var p3      = document.querySelector(".project-page_container-3");
var app     = document.querySelector(".app");
var pp      = document.querySelector(".project-page");
var nt      = document.querySelector(".name-title");
var ntt     = document.querySelector(".name-title_title");
var content = document.querySelector(".content");
var mls     = document.querySelector(".menu-links");

var animation;
var isAnimate = false;

var down = 0;
var up   = 0;

var tchStrt = 0;
var tchNd   = 0;

var ntIsVisible = true;
var p1IsVisible = false;
var p2IsVisible = false;
var p3IsVisible = false;

p1.style.display = "none";
p2.style.display = "none";
p3.style.display = "none";


$(document).on('touchstart', function (e) {
    tchStrt = e.originalEvent.touches[0].pageY;
});

$(document).on('touchend', function (e) {
    tchNd = e.changedTouches[e.changedTouches.length - 1].pageY;
    MobileNav();
});

pp.addEventListener("animationstart", (e) => {
    isAnimate = true;
})

pp.addEventListener("animationend", (e) => {
    isAnimate = false;
})

document.addEventListener("wheel", function (e) {
    if (isAnimate == false) {
        if (e.deltaY > 0) {
            down = -50;

        } if (e.deltaY < 0) {
            up = 50;
        }
    }
    PageNaviagtion();
})


function MobileNav() {
    if (isAnimate == false) {
        if (tchStrt > tchNd) {
            down = -50;
        }
        if (tchNd > tchStrt) {
            up = 50;
        }
        PageNaviagtion();
    }
}

function PageNaviagtion() {

    if (down <= -50 && ntIsVisible == true) {
        app.style = "animation : background-transition 1s cubic-bezier(.71,.2,.45,.36);";
        nt.style = " animation: name-title_transform-transition 1s cubic-bezier(.71,.2,.45,.36);";
        ntt.style = " animation: name-title_transform-transition 0.5s cubic-bezier(.71,.2,.45,.36);";
        $(".content").css('transform', "translateY(0px)");
        down = 0;
        setTimeout(hide, 900);
    }

    if (down <= -50 && p1IsVisible == true) {
        app.style = "animation : background-transition-purple 1s cubic-bezier(.71,.2,.45,.36);";
        pp.style = "animation: name-title_transform-transition 1s cubic-bezier(.71,.2,.45,.36);";
        $(".content").css('transform', "translateY(0px)");
        down = 0;
        setTimeout(project1to2, 900);
    }

    if (down <= -50 && p2IsVisible == true) {
        app.style = "animation : background-transition-blue 1s cubic-bezier(.71,.2,.45,.36);";
        pp.style = "animation: name-title_transform-transition 1s cubic-bezier(.71,.2,.45,.36);";
        $(".content").css('transform', "translateY(0px)");
        down = 0;
        setTimeout(project2to3, 900);
    }

    if (down <= -50 && p3IsVisible == true) {
        app.style = "animation : background-transition-white 1s cubic-bezier(.71,.2,.45,.36);";
        pp.style = "animation: name-title_transform-transition 1s cubic-bezier(.71,.2,.45,.36);";
        $(".content").css('transform', "translateY(0px)");
        down = 0;
        setTimeout(project3to1, 900);

    }

    if (up >= 50 && p3IsVisible == true) {
        app.style = "animation : background-transition-blue_to_purple 1s cubic-bezier(.71,.2,.45,.36);";
        pp.style = "animation : up-transition 1s cubic-bezier(.71,.2,.45,.36);";
        $(".content").css('transform', "translateY(0px)");
        up = 0;
        setTimeout(project3to2, 900);
    }

    if (up >= 50 && p2IsVisible == true) {
        app.style = "animation : background-transition-purple_to_white 1s cubic-bezier(.71,.2,.45,.36);";
        pp.style = "animation : up-transition 1s cubic-bezier(.71,.2,.45,.36);";
        $(".content").css('transform', "translateY(0px)");
        up = 0;
        setTimeout(project2to1, 900);
    }

    if (up >= 50 && p1IsVisible == true) {
        app.style = "animation : background-transition-white_to_blue 1s cubic-bezier(.71,.2,.45,.36);";
        pp.style = "animation : up-transition 1s cubic-bezier(.71,.2,.45,.36);";
        $(".content").css('transform', "translateY(0px)");
        up = 0;
        setTimeout(project1to3, 900);
    }
}


$(".home-btn").click((e) => {

    content.style.display = "block";

    nt.style = "display : block;";

    mls.style = "display : none;";

    ntIsVisible = true;
    p1IsVisible = false;
    p2IsVisible = false;
    p3IsVisible = false;

    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";

    menuIconBgColor1.style.backgroundColor = "var(--bar-bg, rgb(24, 24, 24))";
    menuIconBgColor2.style.backgroundColor = "var(--bar-bg, rgb(24, 24, 24))";

    var animationHome = app.animate(
        [
            {
                opacity: "0",
                background: "#1c2833"
            },

            {
                opacity: "1",
                background: "#1c2833"
            }
        ],

        {
            duration: 1000
        },
    );

    animationHome.onfinish = function () {
        app.style.background = "#1c2833";
    }


})

$(".project-btn").click((e) => {
    content.style.display = "block";

    p2.style.display = "none";

    p3.style.display = "none";

    mls.style = "display : none;";

    ntIsVisible = false;
    p2IsVisible = false;
    p3IsVisible = false;

    hide();
})

$(".about-btn").click((e) => {

    content.style.display = "block";

    nt.style.display  = "none";
    pp.style.display  = "none";
    p1.style.display  = "none";
    p2.style.display  = "none";
    p3.style.display  = "none";
    mls.style.display = "none";

    ntIsVisible = false;
    p1IsVisible = false;
    p2IsVisible = false;
    p3IsVisible = false;

    content.style.background = "#1c2833";
    app.style.background = "#1c2833";

})


function reset() {
    down = 0;
    up = 0;
}

function hide() {
    nt.style.display = "none";
    ntIsVisible = false;

    p1.style = "display : block";
    p1IsVisible = true;

    app.style = "background : #e3e3e3";

    menuIconBgColor1.style.backgroundColor = "var(--bar-bg, #95a5a6)";
    menuIconBgColor2.style.backgroundColor = "var(--bar-bg, #95a5a6)";

    pp.style = "animation: project-page-1_transform-transition-up 1s cubic-bezier(0,.31,0,1);";
}

function project1to2() {
    p2.style.opacity = "1";

    p1.style = "display : none;";
    p1IsVisible = false;

    p2.style = "display : block;";
    p2IsVisible = true;

    app.style = "background : #d3b8ff  ";

    document.getElementsByClassName("button")[1].style.color = "#4a235a";

    menuIconBgColor1.style.backgroundColor = "var(--bar-bg, #4a235a)";
    menuIconBgColor2.style.backgroundColor = "var(--bar-bg, #4a235a)";

    pp.style = "animation: project-page-1_transform-transition-up 1s cubic-bezier(0,.31,0,1);";
}

function project2to3() {
    p3.style.opacity = "1";

    p2.style = "display : none;";
    p2IsVisible = false;

    p3.style = "display : block";
    p3IsVisible = true;

    app.style = "background : #00192f ";

    document.getElementsByClassName("button")[2].style.color = "#374b5d";

    menuIconBgColor1.style.backgroundColor = "var(--bar-bg, #10334b)";
    menuIconBgColor2.style.backgroundColor = "var(--bar-bg, #10334b)";

    pp.style = "animation: project-page-1_transform-transition-up 1s cubic-bezier(0,.31,0,1);";
}


function project3to1() {
    p3.style = "display : none;";
    p3IsVisible = false;

    p1.style = "display : block";
    p1IsVisible = true;

    app.style = "background : #e3e3e3";

    menuIconBgColor1.style.backgroundColor = "var(--bar-bg, #95a5a6)";
    menuIconBgColor2.style.backgroundColor = "var(--bar-bg, #95a5a6)";

    pp.style = "animation: project-page-1_transform-transition-up 1s cubic-bezier(0,.31,0,1);";
}

function project3to2() {
    p3.style = "display : none;";
    p3IsVisible = false;

    p2.style = "display : block;";
    p2IsVisible = true;

    app.style = "background : #d3b8ff  ";

    document.getElementsByClassName("button")[1].style.color = "#4a235a";

    menuIconBgColor1.style.backgroundColor = "var(--bar-bg, #4a235a)";
    menuIconBgColor2.style.backgroundColor = "var(--bar-bg, #4a235a)";

    pp.style = "animation : down-transition 1s cubic-bezier(0,.31,0,1);";

}

function project2to1() {
    p2.style = "display : none;";
    p2IsVisible = false;

    p1.style = "display : block;";
    p1IsVisible = true;

    app.style = "background : #e3e3e3";

    menuIconBgColor1.style.backgroundColor = "var(--bar-bg, #95a5a6)";
    menuIconBgColor2.style.backgroundColor = "var(--bar-bg, #95a5a6)";

    pp.style = "animation : down-transition 1s cubic-bezier(0,.31,0,1);";

}

function project1to3() {
    p1.style = "display : none;";
    p1IsVisible = false;

    p3.style = "display : block;";
    p3IsVisible = true;

    app.style = "background : #00192f ";

    document.getElementsByClassName("button")[2].style.color = "#374b5d";

    menuIconBgColor1.style.backgroundColor = "var(--bar-bg, #374b5d)";
    menuIconBgColor2.style.backgroundColor = "var(--bar-bg, #374b5d)";

    pp.style = "animation : down-transition 1s cubic-bezier(0,.31,0,1);";

}