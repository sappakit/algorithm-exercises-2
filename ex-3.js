function validatePIN(pin) {
  //Start coding here
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  const number = "0123456789".split("");

  for (let i = 0; i < pin.length; i++) {
    if (!number.includes(pin[i])) {
      return false;
    }
  }
  return true;
}

let result1 = validatePIN("1234");
console.log(result1); // true

let result2 = validatePIN("12345");
console.log(result2); // false

let result3 = validatePIN("a234");
console.log(result3); // false
