// function a(){
//     x = 3;
// }
// a();
// console.log(x);

// var person = {
//     first_name:'wang',
//     last_name:'xiang',
//     full_name : function() {
//         console.log(this);
//          return this.first_name + ' ' + this.last_name;
//     }
// }
// console.log(person.full_name());

// function Person (arg1, arg2){
//     console.log(this);
//     this.str = arg1 + ' ' + arg2;
//     console.log(this.str);
// }
//
// var person = new Person('wang','xiang');
function Person (arg1, arg2){
    //console.log(this);
    this.x = arg1;
    this.y = arg2;
    console.log('first_name: ' + this.x + ' '+ 'last_name: ' + this.y);
}

var person = new Person();
console.log(Person.call(person,'wang','xiang'));


// function Person (arg1, arg2){
//     console.log(this);
//     this.x = arg1;
//     this.y = arg2;
//     console.log(this.x + ' '+ this.y);
// }
//
// var person = new Person();
// console.log(Person.apply(person,['wang','xiang']));
