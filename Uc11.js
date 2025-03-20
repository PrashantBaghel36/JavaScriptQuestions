// Constants
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NO_WORK_HOURS = 0;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Function to get work hours
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

// a. **Calculate Total Wage and Total Hours Worked using `reduce`**
const totalStats = employeeWorkLog.reduce(
    (acc, day) => {
        acc.totalWage += day.wageEarned;
        acc.totalHours += day.hoursWorked;
        return acc;
    },
    { totalWage: 0, totalHours: 0 }
);

console.log(`Total Wage: $${totalStats.totalWage}, Total Hours Worked: ${totalStats.totalHours} hrs`);

// b. **Show Full Working Days using `forEach`**
console.log("\nFull Working Days:");
employeeWorkLog.forEach(day => {
    if (day.hoursWorked === FULL_TIME_HOURS) console.log(`Day ${day.day}: ${day.hoursWorked} hrs`);
});

// c. **Show Part Working Days using `map` (Reducing to String Array)**
const partWorkingDays = employeeWorkLog
    .filter(day => day.hoursWorked === PART_TIME_HOURS)
    .map(day => `Day ${day.day}`);

console.log("\nPart-Time Working Days:", partWorkingDays.join(", "));

// d. **Show No Working Days using `map`**
const noWorkingDays = employeeWorkLog
    .filter(day => day.hoursWorked === NO_WORK_HOURS)
    .map(day => `Day ${day.day}`);

console.log("\nNo Working Days:", noWorkingDays.length > 0 ? noWorkingDays.join(", ") : "None");
