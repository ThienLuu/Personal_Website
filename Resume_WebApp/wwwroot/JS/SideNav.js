//$(window).resize(function () {
//    if ($(window).width() > 576) {
//        window.onscroll = function () {
//            var currentScrollPos = window.pageYOffset;
//            if (currentScrollPos < 70) {
//                document.getElementById("sideNav").style.display = "none";
//            } else {
//                document.getElementById("sideNav").style.display = "inline";
//            }
//        }
//    }
//    else {
//        document.getElementById("sideNav").style.display = "none";
//    }
//});

$(window).resize(function () {
    if ($(window).width() > 576) {
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (currentScrollPos < 70) {
                document.getElementById("sideNav").style.display = "none";
            } else {
                document.getElementById("sideNav").style.display = "inline";
            }
        }
    }
    else {
        document.getElementById("sideNav").style.display = "none";
    }
});
$(document).ready(function () {
    $(window).trigger('resize');
});