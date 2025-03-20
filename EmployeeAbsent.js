// Constants
const IS_PRESENT = 1;

// Generating Random Value (0 or 1)
let empCheck = Math.floor(Math.random() * 2); // Generates either 0 (Absent) or 1 (Present)

// Checking Employee Status
if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}
