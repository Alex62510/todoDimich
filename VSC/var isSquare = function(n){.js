var isSquare = function(n){
  let k = Math.sqrt(n);
  if (n<0){return false}
  else if (n%k>0){return false}
  else {return true}; // fix me
}