function isPythagoreanTriple(integers) {
   let a = Math.pow(integers[0], 2);
   let b = Math.pow(integers[1], 2);
   let c = Math.pow(integers[2], 2);
  if ((a + b) === c){return true}
  else if ((a + c) === b){return true}
  else if ((b + c ) === a){return true}
  else {return false};
  // Good luck friends!
}