function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main-right").style.marginLeft = "350px";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    document.getElementById('spp').style.visibility='hidden';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main-right").style.marginLeft= "0";
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById('spp').style.visibility='visible';
}
