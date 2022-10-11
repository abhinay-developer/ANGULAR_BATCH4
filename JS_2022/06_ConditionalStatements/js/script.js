console.log("Conditional Statements");


 /***
  * 
  *  1.Simple If
  *  2.if else
  *  3.if else if else
  *  4.Ladder if
  *  5.Nested if
  * 
  * 
  */


/**
 * Simple If
 */
 


function isEligibility() {
    var age = document.getElementById('age').value;
    if (age > 18) { //statement is Executed when condition is true
        document.getElementById('result').innerHTML = "You are Eligible ,Congratulations";
    } else {//statement is Executed when condition is false
        document.getElementById('result').innerHTML = "You are Not Eligible";
    }
}

/* Ladder If */

var percent = 60;

if (percent > 35 && percent <= 45) {  //true  && true   ===>true
    console.log("You are third class")
}
if (percent > 45 && percent < 60) {
    console.log("You are secound class")
}
if (percent >= 60 && percent < 74) {
    console.log("You are first class")
}


/* If else if  else*/

if (percent > 35 && percent <= 45) {  //true  && true   ===>true
    console.log("You are third class")
}
else if (percent > 45 && percent < 60) {
    console.log("You are secound class")
}
else if (percent >= 60 && percent < 74) {
    console.log("You are first class")
}
else {
    console.log("Not Valid Percentage")
}


function percentage() {
    var percentage = document.getElementById('p').value;

    if (percentage > 35 && percentage <= 45) {  //true  && true   ===>true
        document.getElementById('percent').innerHTML = "You are third class";
        //console.log("You are third class")
    }
    else if (percentage > 45 && percentage < 60) {
        document.getElementById('percent').innerHTML = "You are Secound class";
        //console.log("You are secound class")
    }
    else if (percentage >= 60 && percentage < 74) {
        document.getElementById('percent').innerHTML = "You are First class";
        //console.log("You are first class")
    }
    else {
        document.getElementById('percent').innerHTML = "Not Valid Percentage";
        // console.log("Not Valid Percentage")
    }
}

/**
 * Nested If
 */

var marks=40;


if(marks>50){
    console.log("Marks Greater than 50")
    if(marks>60){
        console.log("Marks Greater than 60")
    }
}