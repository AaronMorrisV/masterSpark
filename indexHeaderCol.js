var scrollPos = $(window).scrollTop();
var landerPos = document.getElementById('lander').getBoundingClientRect().top + window.pageYOffset;
var aboutPos = document.getElementById('about').getBoundingClientRect().top + window.pageYOffset;
var partnersPos = document.getElementById('partners').getBoundingClientRect().top + window.pageYOffset;
var projectsPos = document.getElementById('projects').getBoundingClientRect().top + window.pageYOffset;
var teamPos = document.getElementById('team').getBoundingClientRect().top + window.pageYOffset;

window.addEventListener("resize", windowResize);
function windowResize(){
    var landerPos = document.getElementById('lander').getBoundingClientRect().top + window.pageYOffset;
    var aboutPos = document.getElementById('about').getBoundingClientRect().top + window.pageYOffset;
    var partnersPos = document.getElementById('partners').getBoundingClientRect().top + window.pageYOffset;
    var projectsPos = document.getElementById('projects').getBoundingClientRect().top + window.pageYOffset;
    var teamPos = document.getElementById('team').getBoundingClientRect().top + window.pageYOffset;
}

$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    var headerCol = "";
    var arr = [
        ["landerPos", landerPos, "white"],
        ["aboutPos", aboutPos, "black"],
        ["partnersPos", partnersPos, "white"],
        ["projectsPos", projectsPos, "white"],
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
    else{
        $("header").addClass("header-white");
        $("header").removeClass("header-black");
    }
});
