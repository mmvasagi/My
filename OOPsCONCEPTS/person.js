(function(){
    function person(){
        this.firstname="vasu";
        this.secondname="vasagi";
        console.log(this);
    }
    person.prototype.surname="VN";
    var user=new person();
    user.name="praji";
    console.log(user);
    console.log(user.surname);
    var sister=new Object(user);
    sister.sisname="meha"
    console.log(sister);
    console.log(sister.surname)
})();