// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10;//O(1)
    a = 50 + 3;//O(1)
  
    for (let i = 0; i < input.length; i++) { //O(n)
      anotherFunction();//O(n) - according to video answer because it is in the loop and going through all inputs
      let stranger = true;//O(n)
      a++;//O(n)
    }
    return a;//O(1)
  }
  // the first part is constant as it is adding numbers
  // a loop adds O(n) time so we are at O(n) + 2
  // a function call adds time but I'm not sure if I can calculate the without knowing what the function does

  //After watching video answer
  //O(3 + 4n)