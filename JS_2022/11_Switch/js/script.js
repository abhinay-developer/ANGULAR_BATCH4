//if else if else
console.log("Switch Statement");

function sum(num1, num2) {
    var sum = Number(num1 + num2);
    document.getElementById('result').innerHTML = sum;

}

function sub(num1, num2) {
    var sub = Number(num1 - num2);
    document.getElementById('result').innerHTML = sub;

}

function mul(num1, num2) {
    var mul = Number(num1 * num2);
    document.getElementById('result').innerHTML = mul;

}

switch (prompt("Please Select Operations sum or mul or sub")) {
    case "sum":
        var num1 = Number(prompt("Enter Number1"));
        var num2 = Number(prompt("Enter Number2"));
        sum(num1, num2);
        break;

    case "sub":
        var num1 = Number(prompt("Enter Number1"));
        var num2 = Number(prompt("Enter Number2"));
        sub(num1, num2);
        break;
    case "mul":
        var num1 = Number(prompt("Enter Number1"));
        var num2 = Number(prompt("Enter Number2"));
        mul(num1, num2);
        break;
    default:
        document.getElementById('result').innerHTML = "INVALID  OPTION";
}