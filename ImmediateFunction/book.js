(function(){
    function loadBook(){
        var book=getControls();
        var B={};
        B.name=book.name.value;
        B.author=book.author.value;
       B.price=book.price.value;
        books.getdata(B);
        buildTable();
        book.name.value="";
        book.author.value="";
        book.price.value="";
    
    }
    function getControls(){
        var ctrl={};
        ctrl.name=document.getElementById("bid");
        ctrl.author=document.getElementById("aid");
        ctrl.price=document.getElementById("pid");
        ctrl.btn=document.getElementById("btnid");
        ctrl.del=document.getElementById("delid");
        return ctrl;
    }
    function bindEvents(){
      var control=getControls();
        control.btn.addEventListener("click",loadBook);
        control.del.addEventListener("click",readdata);
    }
    function readdata(){
        var control=getControls();
        var book={};
        book.name=control.name.value;
        book.price=control.price.value;
        book.author=control.author.value;
        books.del(book);
        buildTable();
        control.name.value="";
        control.author.value="";
        control.price.value="";
    }
function buildTable(){
    var booklist=books.get();
    var tableid=document.getElementById("btable");
    tableid.innerHTML="";
        for(var i=0;i<booklist.length;i++){
           var row=buildRow(booklist[i]);
           tableid.appendChild(row);
        }
    }
    function buildRow(data){
        var row=document.createElement("tr");
        var name1=buildColumn(data.name);
        var author=buildColumn(data.author);
        var price=buildColumn(data.price);
        row.appendChild(name1);
        row.appendChild(author);
        row.appendChild(price);
        return row;
    }
    function buildColumn(data){
        var col=document.createElement("td");
        col.innerText=data;
        return col;
    }
      buildTable();
      bindEvents();
  
})();