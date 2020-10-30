// MONTY HALL PROBLEM

const TRIALS = 1000000;
const SHOULD_SWITCH = true;

// One right choice.
let doorSet = [true, false, false];

let correctCount = 0;

for (let i = 0; i < TRIALS; i++) {
  // Randomly Sort Doors
  let doors = doorSet
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  // Make Random Choice.
  const choice = Math.floor(Math.random() * Math.floor(doors.length - 1));

  let didSelectCorrectDoor = doors[choice];

  if (SHOULD_SWITCH) {
    didSelectCorrectDoor = !didSelectCorrectDoor;
  }

  if (didSelectCorrectDoor) {
    correctCount += 1;
  }
}

const accuracy = (correctCount / TRIALS) * 100;
console.log(accuracy + "% Accurate");
