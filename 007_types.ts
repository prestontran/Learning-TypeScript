// Boolean
let paidAccount: boolean = false;

// Number
let age: number = 33;
var taxRate: number = 7.5;

// String
var fullName: string = "Preston Tran";

// Array
var ages: number[] = [33, 28, 11];

// Tuple
let player: [number, string, number, number];
player = [3, "Corerra", 0.333, 33];

// Enum
enum ApprovalStatus {
  Approved,
  Pending,
  Rejected,
}

let job: ApprovalStatus = ApprovalStatus.Approved;

// Any
var apiData: any[] = [123, "Preston", false];

// Void
function printOut(msg: string): void {
  console.log(msg);
}
