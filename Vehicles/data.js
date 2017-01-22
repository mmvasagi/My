
var vehicles = [
    { "Make": "Maruti Suziki", "Model": "WagonR", "Year": "2012" },
     { "Make": "Maruti Suziki", "Model": "Ertiga", "Year": "2016" },
    { "Make": "Audi", "Model": "A5", "Year": "2016" },
    { "Make": "BMW", "Model": "C2000", "Year": "2015" },
    { "Make": "Hyundai", "Model": "Creta", "Year": "2013" },
    { "Make": "Honda", "Model": "Accord", "Year": "2014" }
];
var Makes=[];
function getYear(){
    var idofyear=document.getElementById("yid")
    for(var i=0;i<vehicles.length;i++){
     var optiontag=document.createElement("option");
     optiontag.value=vehicles[i].Year;
      optiontag.textContent=vehicles[i].Year;

     idofyear.appendChild(optiontag);
    }
}
function getMake(){
       var idofyear=document.getElementById("yid")
    var selYear=idofyear.value;

for(var i=0;i<vehicles.length;i++){
    if(selYear==vehicles[i].Year){
        Makes.push(vehicles[i]);
    }
}
loadMakes(Makes);
}
function loadMakes(Makelist){
    var idofmake=document.getElementById("mid");
       idofmake.innerHTML="";
       
         selectOption(idofmake);
    for(var i=0;i<Makelist.length;i++){
      

        var optiontag=document.createElement("option");
      optiontag.value=Makelist[i].Make;
      optiontag.innerText=Makelist[i].Make;
 
      idofmake.appendChild(optiontag);
    }
}
function getModel(){
    var idofmake=document.getElementById("mid");
    var selmake=idofmake.value;
    loadModel(selmake);

}
function loadModel(make){
    var idofmodel=document.getElementById("moid");
    idofmodel.innerHTML="";
    selectOption(idofmodel);
    for(var i=0;i<Makes.length;i++){
        if(make==Makes[i].Make){
            var optiontag=document.createElement("option");
            optiontag.innerText=Makes[i].Model;
            idofmodel.appendChild(optiontag);
        }
    }
}
function selectOption(idmake){
    var optiontag=document.createElement("option");
    optiontag.innerText="select option";
    idmake.appendChild(optiontag);
}
getYear();
