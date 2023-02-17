function rowSumOddNumbers(n) {
 let sum = 0; 
  for(j=0; j<n; j++){sum = sum + n*(n-1)+1+2*j}
return sum;
	// TODO
}