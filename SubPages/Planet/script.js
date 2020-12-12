let m = parseFloat(document.getElementById("m"));
let gc = "6,67430(31)·10(−11)";
let rad = parseFloat(document.getElementById("rad"));
let g = (gc*m)/rad**2;
let submit = document.search.send;
function jopaNegra(e) {
    let print = document.getElementById("result");
    let printEl = document.createElement("p");
    printEl.textContent = g;
    console.log(g);
    print.appendChild(printEl);
}
submit.addEventListener("click",jopaNegra);
function viewDiv(){
    document.getElementById("IIII").style.display = "block";
  };