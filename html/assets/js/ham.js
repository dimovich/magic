var x = true;
function toggleham() {
    if (Boolean(x)) {
	document.getElementById("sidenav").style.display = "";
	document.getElementById("sidenav").style.opacity = "1";
    } else {
	document.getElementById("sidenav").style.opacity = "0";
	document.getElementById("sidenav").style.display = "none";
    }
    x = !x;
}
