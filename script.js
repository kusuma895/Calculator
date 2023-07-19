function Add(){
    let a =parseInt(document.getElementById("val1").value);
    let b=parseInt(document.getElementById("val2").value);
    let c=a+b;
    document.getElementById("ans1").innerHTML="Addition is "+c;
}
function Sub(){
    let a =parseInt(document.getElementById("val1").value);
    let b=parseInt(document.getElementById("val2").value);
    let c=a-b;
    document.getElementById("ans2").innerHTML="Subtraction is "+c;
}
function Mul(){
    let a =parseInt(document.getElementById("val1").value);
    let b=parseInt(document.getElementById("val2").value);
    let c=a*b;
    document.getElementById("ans3").innerHTML="Multipliaction is "+c;
}
function Div(){
    let a =parseInt(document.getElementById("val1").value);
    let b=parseInt(document.getElementById("val2").value);
    let c=a/b;
    document.getElementById("ans4").innerHTML="Division is "+c;
}
function Mod(){
    let a =parseInt(document.getElementById("val1").value);
    let b=parseInt(document.getElementById("val2").value);
    let c=a%b;
    document.getElementById("ans5").innerHTML="Modulo is "+c;
}