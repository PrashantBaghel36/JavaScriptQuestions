// Function to validate Indian PIN Code
const validatePinCode = (pincode) => {
    const pinRegex = /^[1-9][0-9]{5}$/;
    return pinRegex.test(pincode);
};

// Test Cases
console.log(validatePinCode("400088"));  // ✅ true
console.log(validatePinCode("123456"));  // ✅ true
console.log(validatePinCode("012345"));  // ❌ false (cannot start with 0)
console.log(validatePinCode("4008"));    // ❌ false (less than 6 digits)
console.log(validatePinCode("4000889")); // ❌ false (more than 6 digits)
console.log(validatePinCode("40A088"));  // ❌ false (contains an alphabet)
console.log(validatePinCode("A400088")); // ❌ false (starts with an alphabet)
console.log(validatePinCode("#400088")); // ❌ false (starts with a special character)
console.log(validatePinCode("400@88"));  // ❌ false (contains a special character)
