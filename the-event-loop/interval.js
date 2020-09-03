/* eslint-disable no-console */

let currentCount = 3;

function countDown() {
  if (currentCount === 0) {
    clearInterval(intervalID);
    console.log('Blast off!!');
    return;
  }
  console.log(currentCount);
  currentCount--;
}
const intervalID = setInterval(countDown, 1000);
