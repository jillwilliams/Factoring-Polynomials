const myProblem = () => {
    var a = document.getElementById("a1").value;
    var b = document.getElementById("b1").value;
    var c = document.getElementById("c1").value;
    var d = document.getElementById("d1").value;
    if (a == "-6" && b == "-2" && c == "1" && d == "9") {
        return "Good Job!";
    } else
        return "Try Again!";
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
};

const myProblem2 = () => {
    var e = document.getElementById("a2").value;
    var f = document.getElementById("b2").value;
    var g = document.getElementById("c2").value;
    if (e == "-6" && f == "1" && g == "7") {
        return "Good Job!";
    } else
        return "Try Again!";
};
const myCalc2 = () => {
    document.getElementById("demo2").innerHTML = myProblem2();
};

const myProblem3 = () => {
    var h = document.getElementById("f1").value;
    var i = document.getElementById("f2").value;
    var j = document.getElementById("f3").value;
    if (h == "-6" && i == "1" && j == "7") {
        return "f(x) = (x + 6)(x - 1)(x - 7)";
    } else
        return "Try Again!";
};
const myCalc3 = () => {
    document.getElementById("demo3").innerHTML = myProblem3();
};

const myProblem4 = () => {
    var k = document.getElementById("g1").value;
    var l = document.getElementById("g2").value;
    var m = document.getElementById("g3").value;
    if (k == "-8" && l == "-2" && m == "3") {
        return "f(x) = (x + 8)(x + 2)(x - 3)";
    } else
        return "Try Again!";
};
const myCalc4 = () => {
    document.getElementById("demo4").innerHTML = myProblem4();
};

const myProblem5 = () => {
    var n = document.getElementById("h1").value;
    var o = document.getElementById("h2").value;
    var p = document.getElementById("h3").value;
    var q = document.getElementById("h4").value;
    var r = document.getElementById("h5").value;
    if (n == "-10" && o == "-5" && p == "-1" && q == "3" && r == "9") {
        return "f(x) = (x + 10)(x + 5)(x + 1)(x - 3)(x - 9)";
    } else
        return "Try Again!";
};
const myCalc5 = () => {
    document.getElementById("demo5").innerHTML = myProblem5();
};
