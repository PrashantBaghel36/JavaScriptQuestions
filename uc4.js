// Function to validate Indian PIN Code
const validatePinCode = (pincode) => {
    const pinRegex = /^[1-9][0-9]{2}\s?[0-9]{3}$/;
    return pinRegex.test(pincode);
};

// Test Cases
console.log(validatePinCode("400088"));   // ✅ true (valid PIN)
console.log(validatePinCode("400 088"));  // ✅ true (valid with space)
console.log(validatePinCode("123456"));   // ✅ true (valid PIN)
console.log(validatePinCode("123 456"));  // ✅ true (valid with space)
console.log(validatePinCode("012345"));   // ❌ false (cannot start with 0)
console.log(validatePinCode("400088B"));  // ❌ false (ends with alphabet)
console.log(validatePinCode("400 088#")); // ❌ false (ends with special char)
console.log(validatePinCode("A400088"));  // ❌ false (starts with alphabet)
console.log(validatePinCode("#400 088")); // ❌ false (starts with special char)
console.log(validatePinCode("4000889"));  // ❌ false (more than 6 digits)
console.log(validatePinCode("400 0889")); // ❌ false (more than 6 digits)
console.log(validatePinCode("40088"));    // ❌ false (less than 6 digits)
console.log(validatePinCode("400 88"));   // ❌ false (less than 6 digits)

