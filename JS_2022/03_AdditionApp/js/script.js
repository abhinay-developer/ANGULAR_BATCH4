


function add(){
    var first=document.getElementById('firstNum').value;
    var second=document.getElementById('secondNum').value;
    var sum=Number(first)+Number(second);
    document.getElementById('result').innerHTML=sum;
    // console.log(sum);
    document.getElementById('firstNum').value="";
    document.getElementById('secondNum').value="";
    
}


