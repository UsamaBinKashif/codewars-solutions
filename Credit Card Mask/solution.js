function maskify(cc) {
    if (cc.length <= 4) {
      return cc;
    }
  
    const masked = '#'.repeat(cc.length - 4) + cc.slice(-4);
    return masked;
  }
  
  const creditCard = "1234567890123456";
  const maskedCreditCard = maskify(creditCard);
  console.log(maskedCreditCard);  // Output: "############3456"