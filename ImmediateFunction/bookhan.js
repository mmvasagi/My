(function(data){
     data.books={};
 
 var booklist=[{name:"Book name",author:"Author",price:"Price"},{name:"c",author:"bala",price:1000}];
 data.books.getdata=function (book){
     booklist.push(book);
   
 };
 data.books.get=function(){
     return booklist;
 }
 data.books.del=function(book){
   for(var i=0;i<booklist.length;i++){
       if((booklist[i].name==book.name)&&(booklist[i].author==book.author)&&(booklist[i].price==book.price))
       {
           booklist[i].name=null;
           booklist[i].price=null;
           booklist[i].author=null;
       }
   }
 }
})(window);