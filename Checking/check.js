function Checking(num1, num2){
if(typeof num1=="number" && typeof num2=="number"){
  checkingnum(num1,num2);
}
else{
    console.log("comparision not passible");
}
}
function checkingnum(num1,num2){
    if(num1==num2){
    console.log("both are equal");
    }
}

Checking(12,12);