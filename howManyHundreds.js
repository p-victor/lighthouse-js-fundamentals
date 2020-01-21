function howManyHundreds(num) {
  var count = 0;

  while (num >= 0) {
    num -= 100;
    if (num >= 0) {
      count ++;
    }
    else {
      break;
    }
  }
  return count;
}

console.log(howManyHundreds(0));