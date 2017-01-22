(function(){
    //var controls=getControls();
    events={};
    events.alphabetsonly=function(evt){
        var code=evt.keyCode;
        if((code>=65&&code<=90)||(code>=97&&code<=122)){

        }
        else{
            alert("enter alpha only");
            evt.preventDefault();
        }
    }
    events.numberonly=function(evt){
      console.log(evt.keyCode);
        var code=evt.keyCode;
        var len;
        if(code>=49&&code<=58){
        len=this.value.length;
        if(len<10){

        }
        else{
            alert("enter 10 digits only");
            evt.preventDefault();
       }
    }

   else{
  alert("enter num only");
  evt.preventDefault();
    }
    }
    events.alphanumaric=function(evt){
        var code=evt.keyCode;
        var len;
        if((code>=49&&code<=58)||(code>=65&&code<=90)||(code>=97&&code<=122)){
        len=this.value.length;
        if(len<15){

        }
        else{
            alert("enter 15 digits only");
            evt.preventDefault();
       }
    }

   else{
        alert("don't enter special char");
       evt.preventDefault();
    }
    }
    
})();