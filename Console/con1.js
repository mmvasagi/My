(function(){
    function bookingType(source,destination,mode){
    var discount;
         if(mode=="fligth"){
            discount=.2;
         }
         else{
             discount=.3;
         }
  return {
      printing: function(){
          console.log("ticket confirmed");
          console.log(source+" to "+destination);
          console.log("discount"+1000*discount);
      },
      calculation:function (){
        console.log("amount");
      console.log(1000-(1000*discount));
      }
  };    
}
var ref=bookingType("delhi","vij","fligth");
ref.printing();
ref.calculation();
})();