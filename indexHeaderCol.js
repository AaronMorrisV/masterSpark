var scrollPos = $(window).scrollTop();
var landerPos = document.getElementById('lander').getBoundingClientRect().top + window.pageYOffset;
var aboutPos = document.getElementById('about').getBoundingClientRect().top + window.pageYOffset;
var partnersPos = document.getElementById('partners').getBoundingClientRect().top + window.pageYOffset;
var initiativesPos = document.getElementById('initiatives').getBoundingClientRect().top + window.pageYOffset;
var teamPos = document.getElementById('team').getBoundingClientRect().top + window.pageYOffset;

window.addEventListener("resize", windowResize);
function windowResize(){
    landerPos = document.getElementById('lander').getBoundingClientRect().top + window.pageYOffset;
    aboutPos = document.getElementById('about').getBoundingClientRect().top + window.pageYOffset;
    partnersPos = document.getElementById('partners').getBoundingClientRect().top + window.pageYOffset;
    initiativesPos = document.getElementById('initiatives').getBoundingClientRect().top + window.pageYOffset;
    teamPos = document.getElementById('team').getBoundingClientRect().top + window.pageYOffset;
}

$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    var headerCol = "";
    var arr = [
        ["landerPos", landerPos, "white"],
        ["aboutPos", aboutPos, "black"],
        ["partnersPos", partnersPos, "white"],
        ["initiativesPos", initiativesPos, "white"],
        ["teamPos", teamPos, "black"],
    ]
    for (i = 0; i < arr.length; i++){
        if(scrollPos < arr[i][1]){
            //console.log(arr[i-1][0]);
            headerCol = arr[i-1][2];
            break
        }
        else if(i == arr.length-1){
            //console.log(arr[arr.length-1][0]);
            headerCol = arr[arr.length-1][2];
        }
    }
    if(headerCol == "white"){
        $("header").addClass("header-black");
        $("header").removeClass("header-white");
    }
    else if (headerCol == "black"){
        $("header").addClass("header-white");
        $("header").removeClass("header-black");
    }
});
