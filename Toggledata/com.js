var para=document.getElementById("pid");
    var str=para.textContent;
function compression(){
    var para=document.getElementById("pid");
    var str1=str.substring(5,10);
    para.textContent=str1;

}
function expansion(){
    para.textContent=str;
}