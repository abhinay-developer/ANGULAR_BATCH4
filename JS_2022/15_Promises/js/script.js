console.log("PROMISE");
var a = 20;

// let promise = new Promise((resolve, reject) => {
//     if (a == 10) {
//         resolve("Code is Success");
//     } else {
//         reject("Code is Failed");
//     }


// }).then((data) => {
//     console.log(data);
// }).catch((data) => {
//     console.log(data);
// })

//FETCH API

let URL=fetch("https://jsonplaceholder.typicode.com/users");
 URL.then((data)=>data.json()).then((data)=>{
  data.forEach(element => {
     console.log(element.company.name);
     document.getElementById('result').innerHTML=element.company.name;
  });
})