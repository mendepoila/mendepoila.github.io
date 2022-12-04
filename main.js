let nav = document.querySelector("#nav").style;
document.addEventListener("scroll", changeColor);

console.log(nav)

function changeColor(event){
    if (document.documentElement.scrollTop <= 400){
        console.log(1);
        nav.backgroundColor = "rgba(0, 0, 0, " + document.documentElement.scrollTop / 400 + ")";
        return;
    }
    else {
        nav.backgroundColor = "#000";
    }
}

console.log("hello")