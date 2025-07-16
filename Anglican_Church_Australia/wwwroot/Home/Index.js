var slides = "";

$(document).ready(function () {
    if ($(window).width() <= 725) {
        a = document.getElementById("bannerLogo");
        a.src = "img/banner_logo_white_thumb.png";
        a.style.width = '30px';
        a.style.height = '20px';
        b = document.getElementById("bannerLogoFooter");
        b.src = "img/banner_logo_white_thumb.png";
        b.style.width = '50px';
        b.style.height = '40px';
    }
    if (slides == "") {
        $.ajax({
            url: "Home/GetSlides",
            type: 'Post',
            dataType: 'json',
            data: "",
            success: function (response) {
                slides = response;
            }
        });
    }
    $(window).resize(function () {
        var a, b;
        if ($(window).width() <= 675) {
            a = document.getElementById("bannerLogo");
            a.src = "img/banner_logo_white_thumb.png";
            a.style.width = '30px';
            a.style.height = '20px';
            b = document.getElementById("bannerLogoFooter");
            b.src = "img/banner_logo_white_thumb.png";
            b.style.width = '50px';
            b.style.height = '40px';
        }
        if ($(window).width() > 1500) {
            a = document.getElementById("bannerLogo");
            a.src = "img/banner_logo_white.png";
            a.style.width = '300px';
            a.style.height = '50px';
            b = document.getElementById("bannerLogoFooter");
            b.src = "img/banner_logo_white.png";
            b.style.width = '500px';
            b.style.height = '100px';
        }
    });
});

function scrollingDown() {
    document.getElementById("scroll_message").style.visibility = "hidden";
    document.getElementById("scrolling_down").style.visibility = "hidden";
    document.getElementById("parish").style.display = "none";
    document.getElementById("nav").style.backgroundColor = "#9b08ed";

}


function myScrolling() {
    var y = parseInt(window.scrollY);
    if (y < 5) {
        document.getElementById("scroll_message").style.visibility = "visible"; 
        document.getElementById("scrolling_down").style.visibility = "visible"; 
        document.getElementById("parish").style.display = "block"; 
        document.getElementById("nav").style.backgroundColor = "#f1f1f1";
        document.getElementById("nav").style.background = "rgba(0, 0, 0, 0.5)";
    }

    if (y > 5 && y < 600) {
        document.getElementById("scroll_message").style.visibility = "hidden";
        document.getElementById("scrolling_down").style.visibility = "hidden"; 
        document.getElementById("parish").style.display = "none";
    }

    if (y >= 600 && y <= 810) {
        document.getElementById("nav").style.backgroundColor = "#9b08ed";

    }
}

function plusSlides(direction) {
    var a = document.getElementById("slide0").title;
    var b = document.getElementById("slide1").title;
    var c = document.getElementById("slide2").title;
    var d = 0;
    var e = "";

    if (direction == "forward") {
        if ($(window).width() > 100 && $(window).width() < 866) {
            d = parseInt(a);
            if (d++ < slides.length - 1) {
                document.getElementById("slide0").style.backgroundImage = "url(" + slides[d].urlPath + ")";
                document.getElementById("slide_title0").innerHTML = slides[d].title;
                document.getElementById("slide_time0").innerHTML = slides[d].scheduleDate + " " + slides[d].scheduleTime + "<br />" + "Learn More >";
                document.getElementById("slide0").title = slides[d].index;
            }
        }
        if ($(window).width() >= 866 && $(window).width() < 1316) {
            d = parseInt(b);
            if (d++ < slides.length - 1) {
                document.getElementById("slide0").style.backgroundImage = document.getElementById("slide1").style.backgroundImage;
                document.getElementById("slide_title0").innerHTML = document.getElementById("slide_title1").innerHTML;
                document.getElementById("slide_time0").innerHTML = document.getElementById("slide_time1").innerHTML;
                document.getElementById("slide0").title = b;
                document.getElementById("slide1").style.backgroundImage = "url(" + slides[d].urlPath + ")";
                document.getElementById("slide_title1").innerHTML = slides[d].title;
                document.getElementById("slide_time1").innerHTML = slides[d].scheduleDate + " " + slides[d].scheduleTime + "<br />" + "Learn More >";
                document.getElementById("slide1").title = slides[d].index;
            }
        }
        if ($(window).width() >= 1316 && $(window).width() < 2000) {

            d = parseInt(c);
            if (d++ < slides.length - 1) {
                document.getElementById("slide0").style.backgroundImage = document.getElementById("slide1").style.backgroundImage;
                document.getElementById("slide1").style.backgroundImage = document.getElementById("slide2").style.backgroundImage;
                document.getElementById("slide_title0").innerHTML = document.getElementById("slide_title1").innerHTML;
                document.getElementById("slide_title1").innerHTML = document.getElementById("slide_title2").innerHTML;
                document.getElementById("slide_time0").innerHTML = document.getElementById("slide_time1").innerHTML;
                document.getElementById("slide_time1").innerHTML = document.getElementById("slide_time2").innerHTML;
                document.getElementById("slide2").style.backgroundImage = "url("+slides[d].urlPath+")";
                document.getElementById("slide_title2").innerHTML = slides[d].title;
                document.getElementById("slide_time2").innerHTML = slides[d].scheduleDate + " " + slides[d].scheduleTime + "<br />" + "Learn More >";
                document.getElementById("slide0").title = b;
                document.getElementById("slide1").title = c;
                document.getElementById("slide2").title = slides[d].index;
            }
        }

    } else {
        d = parseInt(a);
        if ($(window).width() > 100 && $(window).width() < 866) {
            if (d-- > 0) {
                document.getElementById("slide0").style.backgroundImage = "url(" + slides[d].urlPath + ")";;
                document.getElementById("slide_title0").innerHTML = slides[d].title;
                document.getElementById("slide_time0").innerHTML = slides[d].scheduleDate + " " + slides[d].scheduleTime + "<br />" + "Learn More >";
                document.getElementById("slide0").title = slides[d].index;
            }
        }
        if ($(window).width() >= 866 && $(window).width() < 1316) {
            if (d-- > 0) {
                document.getElementById("slide1").style.backgroundImage = document.getElementById("slide0").style.backgroundImage
                document.getElementById("slide_title1").innerHTML = document.getElementById("slide_title0").innerHTML;
                document.getElementById("slide_title1").innerHTML = document.getElementById("slide_title0").innerHTML;
                document.getElementById("slide_time1").innerHTML = document.getElementById("slide_time0").innerHTML;
                document.getElementById("slide1").title = a;
                document.getElementById("slide0").style.backgroundImage = "url(" + slides[d].urlPath + ")";
                document.getElementById("slide_title0").innerHTML = slides[d].title
                document.getElementById("slide_time0").innerHTML = slides[d].scheduleDate + " " + slides[d].scheduleTime + "<br />" + "Learn More >";
                document.getElementById("slide0").title = slides[d].index;
            }
        }
        if ($(window).width() >= 1316 && $(window).width() < 2000) {
            if (d-- > 0) {
                document.getElementById("slide2").style.backgroundImage = document.getElementById("slide1").style.backgroundImage;
                document.getElementById("slide1").style.backgroundImage = document.getElementById("slide0").style.backgroundImage;
                document.getElementById("slide_title2").innerHTML = document.getElementById("slide_title1").innerHTML;
                document.getElementById("slide_title1").innerHTML = document.getElementById("slide_title0").innerHTML;
                document.getElementById("slide_time2").innerHTML = document.getElementById("slide_time1").innerHTML;
                document.getElementById("slide_time1").innerHTML = document.getElementById("slide_time0").innerHTML;
                document.getElementById("slide0").style.backgroundImage = "url(" + slides[d].urlPath + ")";
                document.getElementById("slide_title0").innerHTML = slides[d].title;
                document.getElementById("slide_time0").innerHTML = slides[d].scheduleDate + " " + slides[d].scheduleTime + "<br />" + "Learn More >";
                document.getElementById("slide2").title = b;
                document.getElementById("slide1").title = a;
                document.getElementById("slide0").title = slides[d].index;
            }
        }
    }
}