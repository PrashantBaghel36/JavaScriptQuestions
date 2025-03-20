// Function to validate Email
const validateEmail = (email) => {
    const emailRegex = /^abc([._+\-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    return emailRegex.test(email);
};

// ✅ Valid Test Cases
console.log(validateEmail("abc@bridgelabz.co"));          // ✅ true (valid without optional part)
console.log(validateEmail("abc.xyz@bridgelabz.co.in"));   // ✅ true (valid with optional part)
console.log(validateEmail("abc+test@bridgelabz.co.in"));  // ✅ true (valid with "+")
console.log(validateEmail("abc-test@bridgelabz.co"));     // ✅ true (valid with "-")
console.log(validateEmail("abc_test@bridgelabz.co.uk"));  // ✅ true (valid with "_")

// ❌ Invalid Test Cases
console.log(validateEmail("xyz@bridgelabz.co"));          // ❌ false (must start with "abc")
console.log(validateEmail("abc@xyz.co"));                // ❌ false (must have "bridgelabz")
console.log(validateEmail("abc@bridgelabzcom"));         // ❌ false (missing ".co")
console.log(validateEmail("abc@bridgelabz."));           // ❌ false (missing "co")
console.log(validateEmail("abc@bridgelabz.co1"));        // ❌ false (invalid domain ending)
console.log(validateEmail("abc@bridgelabz.co.123"));     // ❌ false (invalid additional domain ending)
console.log(validateEmail("abc#xyz@bridgelabz.co.in"));  