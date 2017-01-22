(function(){
    function data(num1,num2){
        var add,sub,mul;
        return{
            ADD:function(){
                add=num1+num2;
                console.log(add);
            },
            SUB:function(){
                sub=num1-num2;
                 console.log(sub);
            },
            MUL:function(){
                mul=num1*num2;
                console.log(mul);
            }
        };

    }
      var result=data(10,5);
      result.ADD();
      result.SUB();
      result.MUL();
})();