/**
 * Created by zhaiyuxiu on 2017/8/9.
 */
// MODEL
var Users = function() {
    this.arr = [];
    this.checkUser = function() {
        if(!arguments[0]) {
            throw "use is null";
        }
        if(!(arguments[0] instanceof User)) {
            throw "user is not instanceof User";
        }
    }
    this.addUser = function(user) {
        this.checkUser(user);
        this.arr.push(user);
    };
    this.deleteUser = function(user) {
        this.checkUser(user);
        $.each(this.arr, $.proxy(function(i, value) {
            if(user == value) {
                this.arr.splice(i, 1);
                return false;
            }
        },this));
    }
    this.info = function() {
        $.each(this.arr, function(i, value) {
            console.log(value.info());
        });
    }
    this.createUser = function() {
        var user = new User(arguments[0]);
        return user;
    }

};

var User = function() {
    this.name = arguments[0];
    this.age = arguments[1];
    this.info = function() {
        return "name: " + this.name + "  age: " + this.age;
    };
}