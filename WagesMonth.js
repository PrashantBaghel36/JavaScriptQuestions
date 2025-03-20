// Constants
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NO_WORK_HOURS = 0;
const WORKING_DAYS_IN_MONTH = 20;

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

// Function to calculate total wage for a month
const calculateMonthlyWage = () => {
    let totalWage = 0;
    let totalHours = 0;
    
    for (let day = 1; day <= WORKING_DAYS_IN_MONTH; day++) {
        let dailyHours = getWorkHours();
        let dailyWage = calculateDailyWage(dailyHours);
        totalHours += dailyHours;
        totalWage += dailyWage;
        console.log(`Day ${day}: Work Hours = ${dailyHours}, Daily Wage = $${dailyWage}`);
    }

    console.log(`\nTotal Work Hours in Month: ${totalHours}`);
    console.log(`Total Monthly Wage: $${totalWage}`);
    return totalWage;
};

// Execute the program
calculateMonthlyWage();
