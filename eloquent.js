Minimum

function min(x,y){
  if(x<y){
  return x;}
  else return y;
};

Recursion

function isEven(number){
  if(number === 0){
    return true;
  }
  else if(number === 1){
    return false;
  }
  else {
    return isEven(number-2);
  }
}

//Adding fix for negative numbers
function isEven(number){
  if(number < 0){
    return isEven(number * -1);
  }
  else if(number === 0){
    return true;
  }
  else if(number === 1){
    return false;
  }
  else {
    return isEven(number-2);
  }
}

Bean counting

function countBs(str){
  var count = 0;
  for(var i=0; i<str.length; i++){
    if(str.charAt(i) === "B"){
      count ++;
    }
  }
  return count;
}

function countChar(str, char){
  var count = 0;
  for(var i=0; i<str.length; i++){
    if(str.charAt(i) === char){
      count ++;
    }
  }
  return count;
}
