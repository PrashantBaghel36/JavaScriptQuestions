// Constants
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NO_WORK_HOURS = 0;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Function to get working hours for a day
const getWorkHours = () => {
    let empCheck = Math.floor(Math.random() * 3); // 0 - No Work, 1 - Part-Time, 2 - Full-Time
    switch (empCheck) {
        case 0: return NO_WORK_HOURS;  // No Work
        case 1: return PART_TIME_HOURS; // Part-Time Work
        case 2: return FULL_TIME_HOURS; // Full-Time Work
        default: return NO_WORK_HOURS;
    }
};

// Function to calculate daily wage
const calculateDailyWage = (workHours) => workHours * WAGE_PER_HOUR;

// Function to calculate wages until conditions are met
const calculateWages = () => {
    let totalWage = 0;
    let totalHours = 0;
    let totalDays = 0;

    while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
        let dailyHours = getWorkHours();
        
        // Ensure we don't exceed max hours
        if (totalHours + dailyHours > MAX_WORKING_HOURS) {
            dailyHours = MAX_WORKING_HOURS - totalHours;
        }

        let dailyWage = calculateDailyWage(dailyHours);
        totalHours += dailyHours;
        totalWage += dailyWage;
        totalDays++;

        console.log(`Day ${totalDays}: Work Hours = ${dailyHours}, Daily Wage = $${dailyWage}`);

        // Stop if max working hours are reached
        if (totalHours >= MAX_WORKING_HOURS) {
            break;
        }
    }

    console.log(`\nTotal Work Days: ${totalDays}`);
    console.log(`Total Work Hours: ${totalHours}`);
    console.log(`Total Monthly Wage: $${totalWage}`);
};

// Execute the program
calculateWages();
