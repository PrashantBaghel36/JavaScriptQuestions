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
    switch (empCheck) {
        case 0: return NO_WORK_HOURS;  // No Work
        case 1: return PART_TIME_HOURS; // Part-Time Work
        case 2: return FULL_TIME_HOURS; // Full-Time Work
        default: return NO_WORK_HOURS;
    }
};

// Function to calculate daily wage
const calculateDailyWage = (workHours) => workHours * WAGE_PER_HOUR;

// Function to calculate wages & store in an array
const calculateWages = () => {
    let totalWage = 0;
    let totalHours = 0;
    let totalDays = 0;
    let dailyWages = []; // Array to store daily wages

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

        // Store daily wage in array
        dailyWages.push({ day: totalDays, workHours: dailyHours, wage: dailyWage });

        // Stop if max working hours are reached
        if (totalHours >= MAX_WORKING_HOURS) {
            break;
        }
    }

    return dailyWages;
};

// Get the daily wage array
let dailyWages = calculateWages();

// ✅ a. Calculate total Wage using forEach & reduce
let totalWageUsingReduce = dailyWages.reduce((total, day) => total + day.wage, 0);
console.log(`Total Wage (Using Reduce): $${totalWageUsingReduce}`);

// ✅ b. Show the Day along with Daily Wage using map
console.log("\nDay-wise Wage Breakdown:");
dailyWages.map(day => console.log(`Day ${day.day}: Wage = $${day.wage}`));

// ✅ c. Show Days when Full time wage of $160 was earned using filter
let fullTimeWageDays = dailyWages.filter(day => day.wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("\nDays with Full-Time Wage of $160:", fullTimeWageDays.map(day => `Day ${day.day}`));

// ✅ d. Find the first occurrence when Full Time Wage was earned using find
let firstFullTimeDay = dailyWages.find(day => day.wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log(`\nFirst occurrence of Full-Time Wage: Day ${firstFullTimeDay ? firstFullTimeDay.day : "Not Found"}`);

// ✅ e. Check if Every Element of Full Time Wage is truly holding Full time wage using every
let allFullTime = dailyWages.every(day => day.wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log(`\nAre all full-time wages correct? ${allFullTime ? "Yes" : "No"}`);

// ✅ f. Check if there is any Part Time Wage using some
let hasPartTimeWage = dailyWages.some(day => day.wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log(`\nIs there any Part-Time Wage? ${hasPartTimeWage ? "Yes" : "No"}`);

// ✅ g. Find the number of days the Employee Worked
let daysWorked = dailyWages.length;
console.log(`\nNumber of Days Employee Worked: ${daysWorked}`);
