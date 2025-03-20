// Function to validate Email
const validateEmail = (email) => {
    const emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

// ✅ Valid Test Cases
console.log(validateEmail("abc@bridgelabz.co"));         // ✅ true (valid)
console.log(validateEmail("abc.xyz@bridgelabz.com"));    // ✅ true (valid with optional part)
console.log(validateEmail("abc.123@bridgelabz.in"));     // ✅ true (valid with numbers in optional part)

// ❌ Invalid Test Cases
console.log(validateEmail("xyz@bridgelabz.co"));        
console.log(validateEmail("abc@xyz.co"));               
