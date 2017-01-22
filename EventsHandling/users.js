(function(){
    function getcontrols(){
    var controls={};
    controls.name=document.getElementById("fid");
    controls.phone=document.getElementById("pid");
    controls.author=document.getElementById("aid");   
   return controls;
}
function bindEvents(){
    var ctrl=getcontrols();
    ctrl.name.addEventListener("keypress",events.alphabetsonly);
    ctrl.phone.addEventListener("keypress",events.numberonly);
    ctrl.author.addEventListener("keypress",events.alphanumaric);
}
bindEvents();
})();