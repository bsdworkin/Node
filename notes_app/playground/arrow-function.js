//var square = (x) => {

//    var result = x * x;
//    return result;

//};

var square = (x) => x * x;

console.log(square(9));

var user = {
	name: 'Ben',
    sayHi: () =>{
    	console.log(arguments);
    	console.log(`string text. Im ${this.name}`)
    },
    sayHiAlt(){
    	console.log(arguments);
    	console.log(`string text. Im ${this.name}`)
    }
};

user.sayHi();
user.sayHiAlt(1, 2, 3);