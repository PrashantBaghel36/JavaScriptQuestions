// Constants
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// Generating Random Value (0, 1, or 2)
let empCheck = Math.floor(Math.random() * 3); // 0 - No Work, 1 - Part Time, 2 - Full Time

// Function to get working hours based on employee check
const getWorkingHours = (empCheck) => {
    switch (empCheck) {
        case 0:
            return 0; // No Work
        case 1:
            return PART_TIME_HOURS; // Part-Time Work
        case 2:
            return FULL_TIME_HOURS; // Full-Time Work
        default:
            return 0;
    }
};

// Calculate Work Hours
let workHours = getWorkingHours(empCheck);

// Calculate Daily Wage
let dailyWage = workHours * WAGE_PER_HOUR;

// Display Output
console.log(`Employee Work Hours: ${workHours}`);
console.log(`Employee Daily Wage: $${dailyWage}`);
