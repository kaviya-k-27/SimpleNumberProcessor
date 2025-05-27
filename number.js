    let number=(document.getElementById("inputNumber").value);
    var NumberArray=[];
function AddNumber(){
    NumberArray=[];
     let number1=document.getElementById("inputNumber").value;
        var NumberArray1=number1.split(",");
        console.log(NumberArray1)
        for(var i=0;i<NumberArray1.length;i++){
            NumberArray.push(Number(NumberArray1[i]));
        }
        console.log(NumberArray);
    document.getElementById("CurrentNumber").innerText= "Current Numbers : "+ " " +NumberArray1;
}

function Reset(){
    document.getElementById("inputNumber").value=" ";
    NumberArray=[];
    console.log(NumberArray);
     document.getElementById("result").innerText=" ";
      document.getElementById("CurrentNumber").innerText= "";

}
function SquareAll(){
    console.log(NumberArray);
    let result=NumberArray.map((num)=>num*num);
    document.getElementById("result").innerText= "Square All : " + result;
}
function cubeAll(){
    let cuberesult=NumberArray.map((num)=>num*num*num);
    document.getElementById("result").innerText= "Cube All : " + cuberesult;
}
function showAll(){
    document.getElementById("result").innerText= "Show All : " + NumberArray;
}

function showeven(){
    console.log("kk");
     let res=NumberArray.filter((nums)=>{
  if(nums%2===0){
    return nums;
  }
 });
    document.getElementById("result").innerText= "Show Even :"+ res;
}
function showodd(){
    console.log("kk");
     let res1=NumberArray.filter((nums)=>{
  if(nums%2!==0){
    return nums;
  }
 });
    document.getElementById("result").innerText= "Show Odd :"+ res1;
}
function calculateSum(){
    if(NumberArray.length!==0){
    let calculateSum=NumberArray.reduce((acc ,num)=>acc+num);
    document.getElementById("result").innerText= "Calculate Sum : " + calculateSum;
   
     }
     else{
         document.getElementById("result").innerText= "Calculate Sum : " +0;
     }
       
}