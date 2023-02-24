// var fullName: string = "Preston Tran";
// let paidAccount: boolean = true;
// const versionNumber: number = 1.3;

// fullName = "I dont know";
// paidAccount = false;

// console.log(fullName);
// console.log(paidAccount);
// console.log(versionNumber);

function printName(f, l) {
  let greeting: string = "Hi there, ";
  console.log(greeting + f + " " + l);

  greeting = "Hey there, ";
  console.log(greeting + f + " " + l);
}

printName("preston", "tran");

var msg: string = "Preton";
console.log("Hi " + msg + "! You are tired.");
console.log(`Hi ${msg}! You are tired.`);
