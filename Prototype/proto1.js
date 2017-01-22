(function(){
    //   console.log(this);
    Array.prototype.even=function(){
        for(var i=0;i<this.length;i++){
          if(i%2==0){
              console.log(this[i]);
          }
        }
    };
    Array.prototype.odd=function(){
         for(var i=0;i<this.length;i++){
          if(i%2==1){
              console.log(this[i]);
          }
        }
    };
})();