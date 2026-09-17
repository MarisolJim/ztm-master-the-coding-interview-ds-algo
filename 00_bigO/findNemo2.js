//#1 -- For loop in Javascript.
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100).fill('nemo');

function findNemo2(fish) {
  let t0 = performance.now();
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

findNemo2(everyone)
// instead of using time to calcualte performance, we cam count the number fo operations the algorithm needs to compute
// This is O(n) - we need to go through the entire array and check each element
// If we have 10 names as inpute, we have to check all 10, hence O(n) - linear
// one of the most common time complexities is O(n) - linear time complexity