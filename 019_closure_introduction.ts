// functions have access to any public variables in the outer scope

// function nameFunction(name:string) : void {
//     var n : string = name;

//     function printName() {
//         console.log(n);
//     }

//     printName();
// }

// nameFunction('Preston');

// The inner function maintain access to the outer scope even After the values are returned

function nameFunction(name:string) {
    var n : string = name;

    return function() {
        console.log(n);
    }
};

var nameAgain = nameFunction('Preston');
nameAgain();
