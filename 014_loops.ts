// var x: number = 0;

// while (x < 10) {
//   console.log(x);
//   x++;
// }

let players: number[] = [3, 10, 4, 5, 1];
// for in returns index
for (let player in players) {
  console.log(player);
}

// for of returns value
for (let player of players) {
  console.log(player);
}
