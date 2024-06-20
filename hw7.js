function analyzePassword(password) {
    const specialCharacters = "-#!$@£%^&*()_+|~=`{}[]:\";'<>?,./";
  
    let totalChars = password.length;
    let digitCount = 0;
    let specialCharCount = 0;
    let uppercaseCount = 0;
    let lowercaseCount = 0;
  
    for (let char of password) {
      const charCode = char.charCodeAt(0);
  
      if (charCode >= 48 && charCode <= 57) { 
        digitCount++;
      } else if (specialCharacters.includes(char)) {
        specialCharCount++;
      } else if (charCode >= 65 && charCode <= 90) {
        uppercaseCount++;
      } else if (charCode >= 97 && charCode <= 122) {
        lowercaseCount++;
      }
    }
  
    return {
      totalChars,
      digitCount,
      specialCharCount,
      uppercaseCount,
      lowercaseCount
    };
  }
  
  function validatePassword(password, passwordPolicy) {
    const analysis = analyzePassword(password);
    const messages = [];
  
    if (analysis.totalChars < passwordPolicy.minLenght) {
      messages.push(`Password should be at least ${passwordPolicy.minLenght} characters`);
    }
    
    if (passwordPolicy.maxLenght && analysis.totalChars > passwordPolicy.maxLenght) {
      messages.push(`Password should be no more than ${passwordPolicy.maxLenght} characters`);
    }
  
    if (analysis.specialCharCount < passwordPolicy.specialCharactor) {
      messages.push(`Password should have at least ${passwordPolicy.specialCharactor} special character(s)`);
    }
  
    if (analysis.digitCount < passwordPolicy.numbericCharactor) {
      messages.push(`Password should have at least ${passwordPolicy.numbericCharactor} numeric character(s)`);
    }
  
    if (analysis.lowercaseCount < passwordPolicy.lowercaseCharactor) {
      messages.push(`Password should have at least ${passwordPolicy.lowercaseCharactor} lowercase character(s)`);
    }
  
    if (analysis.uppercaseCount < passwordPolicy.uppercaseCharactor) {
      messages.push(`Password should have at least ${passwordPolicy.uppercaseCharactor} uppercase character(s)`);
    }
  
    if (messages.length === 0) {
      return { isValidPassword: true };
    } else {
      return { isValidPassword: false, message: messages.join(", ") };
    }
  }
  
  // Example usage:
  const password = "pass123";
  const passwordPolicy = {
    minLenght: 8,
    maxLenght: 64,
    specialCharactor: 1,
    numbericCharactor: 1,
    lowercaseCharactor: 1,
    uppercaseCharactor: 1
  };
  
  console.log(validatePassword(password, passwordPolicy));
  