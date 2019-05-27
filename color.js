function setRandomColor() {
    var colors = ["#d11212", "#328c0f", "#000491", "#f77009", "#7c0ac9", "#a05a0b"];
    a = colors[Math.floor(Math.random() * 6)];
    document.getElementById("Banner").style.backgroundColor = a;
    document.getElementById("dropdownMenuButton").style.backgroundColor = a;
    document.getElementById("dropdownMenuButton2").style.backgroundColor = a;
}
