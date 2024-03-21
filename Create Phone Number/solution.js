function createPhoneNumber(numbers) {
    if (!numbers) {
      return "Number is required!"
    }
    var format = "(xxx) xxx-xxxx";
  
    for (var i = 0; i < numbers.length; i++) {
      format = format.replace('x', numbers[i]);
    }
  
    return format;
  }
  
  const numbers = "03150030977";
  console.log(createPhoneNumber(numbers));