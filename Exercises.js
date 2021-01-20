//Question 1
function myReverse(str) {
  let newStr = "";
  for(let i = 0; i < str.length; i++){
    newStr = str[i] + newStr ;
  }  
  return newStr;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  for(let i = 0; i < str.length; i++){
     for(let j = i + 1; j <= str.length; j++){
          combinations.push(str.slice(i,j)) ;
     }
 
  }
  return combinations;
}

//Question 3
function allCaps(str) {
  let arr = str.split(" ");
  str = "";
  for(let i = 0; i < arr.length; i++){
      arr[i] =  arr[i][0].toUpperCase() + arr[i].substr(1);
      str = str + arr[i] + " ";
  }
  str = str.slice(0,-1);
  return str;
}


//Question 4
function myPower(x, n) {
  // your code here
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own
console.log(allCaps("shallom olam"));
// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
