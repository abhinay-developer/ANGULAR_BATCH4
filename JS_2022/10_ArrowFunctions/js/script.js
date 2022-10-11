

function add(value1,value2){
  var sum=Number(value1)+Number(value2);
  console.log(sum);  
}
add(10,20);

//anonymous function or arrow function

 var substraction=function(value1,value2){
    var sub=Number(value1)-Number(value2);
    console.log(sub); 
 }
 substraction(10,20);


var addition =(value1,value2)=>console.log(value1+value2);
addition(10,100);

var displayName=()=>console.log("Sai");
displayName();