function bmi(weight, height) {
  let a = weight/(height*height);
  if (a<=18.5){return "Underweight"}
  if (a<=25.0){return "Normal"}
  if (a<=30.0){return "Overweight"}
  if (a>30){return "Obese"}
  
  return a;
}