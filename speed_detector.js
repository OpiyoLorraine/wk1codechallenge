//this first part is to make sure the console.log statement is visible in the terminal
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const speedLimit = 70;//this is the maximum speed limit allowed

rl.question('Enter a speed: ', (speedInput) => {
    const speed = parseInt(speedInput); // parse input to integer
    let points;

    //this part tests if the speed is within the given range
    if (speed > speedLimit) {
        //this calculates the points penalty if the speed is above the speed limit
        points = Math.floor((speed - speedLimit) / 5); // rounds off to get integer points

        //to test if points have reached license suspension 
        if (points < 12) {
            console.log(`Points: ${points}`);
        } else {
            console.log("License suspended");
        }
    } else {
        console.log("The speed is OK");
    }

    rl.close();
});