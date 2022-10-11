console.log("Array");
//0 1  2    3 4   5 6
var ages = [10, 67, 98, 100, 89, 90, 45]; //67,89,90,98,100

for (var i = 0; i < ages.length; i++) {
    // if(ages[i]>50){
    //     console.log(ages[i]);//10 67,98
    // }
    ages[i] = (ages[i] > 50) ? ages[i] : "";
    console.log(ages[i])
}

//push()  add element to the last

ages.push(120);
console.log(ages);

//unshift()  add element to the last

ages.unshift(5);
console.log(ages);

//pop()  remove element to the last
ages.pop();
console.log(ages);

//shift()  remove element to the last
ages.shift();
console.log(ages);







//  var table=9;
// for(var n=1;n<=10;n++){
//     console.log("9*"+n+"="+(table*n))
// }


