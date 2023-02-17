var humanYearsCatYearsDogYears = function(humanYears) {
  let cat = 0;
  let dog = 0;
  if (humanYears === 1){cat = 15; dog = 15}
  else if (humanYears === 2){cat = 24; dog = 24}
  else {cat = 24 + 4*(humanYears-2); dog = 24 + 5*(humanYears-2)}
  // Your code here!
  return [humanYears,cat,dog];
}