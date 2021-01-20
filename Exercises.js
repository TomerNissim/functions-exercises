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
  let power = 1 ;
  for(let i = 0; i < n; i++){
      power = power * x;
  }
  return power;
}


//Question 5
function getFirstNotRepeating(str) {
  for(let i = 0; i < str.length; i++){
      if(str.indexOf(str[i]) === str.lastIndexOf(str[i]))
          return str[i];
  }
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  let sum = 0;
  for(let i = 1; i <= num; i++){
      if((num % i) === 0)
          sum += i;
  }
  if(sum / 2 === num)
      return true;
  return false;
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
