// Function to validate Email
const validateEmail = (email) => {
    const emailRegex = /^abc([._+\-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
    return emailRegex.test(email);
};

// ✅ Valid Test Cases
console.log(validateEmail("abc@bridgelabz.co"));          // ✅ true (valid without optional parts)
console.log(validateEmail("abc.xyz@bridgelabz.co.in"));   // ✅ true (valid with optional part and country code)
console.log(validateEmail("abc+test@bridgelabz.co.us"));  // ✅ true (valid with "+" and country code)
console.log(validateEmail("abc-test@bridgelabz.co.uk"));  // ✅ true (valid with "-" and country code)
console.log(validateEmail("abc_test@bridgelabz.co"));     // ✅ true (valid with "_", no country code)

// ❌ Invalid Test Cases
console.log(validateEmail("xyz@bridgelabz.co"));          // ❌ false (must start with "abc")
console.log(validateEmail("abc@xyz.co"));                // ❌ false (must have "bridgelabz")
console.log(validateEmail("abc@bridgelabzcom"));         // ❌ false (missing ".co")
console.log(validateEmail("abc@bridgelabz."));           // ❌ false (missing "co")
console.log(validateEmail("abc@bridgelabz.co.123"));     // ❌ false (TLD must be exactly 2 letters)
console.log(validateEmail("abc@bridgelabz.co.abcdef"));  // ❌ false (TLD must be exactly 2 characters)
console.log(validateEmail("abc#xyz@bridgelabz.co.in"));  // ❌ false ("#" is not allowed)
console.log(validateEmail("abc@bridgelabz.co@in"));      // ❌ false (extra "@" is not allowed)
console.log(validateEmail("abc@bridgelabz.co.12"));      // ❌ false (TLD cannot be numbers)
