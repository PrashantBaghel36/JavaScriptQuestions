// Constants
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NO_WORK_HOURS = 0;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Function to get work hours for a day
const getWorkHours = () => {
    let empCheck = Math.floor(Math.random() * 3); // 0 - No Work, 1 - Part-Time, 2 - Full-Time
    return empCheck === 0 ? NO_WORK_HOURS : empCheck === 1 ? PART_TIME_HOURS : FULL_TIME_HOURS;
};

// Function to calculate daily wage
const calculateDailyWage = (workHours) => workHours * WAGE_PER_HOUR;

// Array to store daily records
let employeeWorkLog = [];

let totalHours = 0;
let totalDays = 0;

// Loop to generate daily records
while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    let dailyHours = getWorkHours();

    // Ensure total hours do not exceed max allowed hours
    if (totalHours + dailyHours > MAX_WORKING_HOURS) {
        dailyHours = MAX_WORKING_HOURS - totalHours;
    }

    let dailyWage = calculateDailyWage(dailyHours);
    totalHours += dailyHours;
    totalDays++;

    // Store data in an object and push it to the array
    employeeWorkLog.push({
        day: totalDays,
        hoursWorked: dailyHours,
        wageEarned: dailyWage
    });

    if (totalHours >= MAX_WORKING_HOURS) break;
}

// ✅ Display stored objects
console.log("Employee Work Log:", employeeWorkLog);
