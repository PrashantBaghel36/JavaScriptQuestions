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

// Function to calculate wages & hours and store in Maps
const calculateWagesAndHours = () => {
    let totalHours = 0;
    let totalDays = 0;
    let dailyWageMap = new Map();
    let dailyHoursMap = new Map();

    while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
        let dailyHours = getWorkHours();

        // Ensure we don't exceed max hours
        if (totalHours + dailyHours > MAX_WORKING_HOURS) {
            dailyHours = MAX_WORKING_HOURS - totalHours;
        }

        let dailyWage = calculateDailyWage(dailyHours);
        totalHours += dailyHours;
        totalDays++;

        // Store in Maps
        dailyWageMap.set(totalDays, dailyWage);
        dailyHoursMap.set(totalDays, dailyHours);

        if (totalHours >= MAX_WORKING_HOURS) break;
    }

    return { dailyWageMap, dailyHoursMap };
};

// Get the Maps
let { dailyWageMap, dailyHoursMap } = calculateWagesAndHours();

// ✅ a. Calculate total wage and total hours using Arrow Functions
let totalWage = [...dailyWageMap.values()].reduce((total, wage) => total + wage, 0);
let totalHours = [...dailyHoursMap.values()].reduce((total, hours) => total + hours, 0);
console.log(`\nTotal Wage: $${totalWage}, Total Hours Worked: ${totalHours} hrs`);

// ✅ b. Categorize full-time, part-time, and no-work days using Arrow Functions
let fullTimeDays = [...dailyHoursMap.entries()].filter(([day, hours]) => hours === FULL_TIME_HOURS).map(([day]) => day);
let partTimeDays = [...dailyHoursMap.entries()].filter(([day, hours]) => hours === PART_TIME_HOURS).map(([day]) => day);
let noWorkDays = [...dailyHoursMap.entries()].filter(([day, hours]) => hours === NO_WORK_HOURS).map(([day]) => day);

// ✅ Display categorized days
console.log(`\nFull-Time Work Days: ${fullTimeDays}`);
console.log(`Part-Time Work Days: ${partTimeDays}`);
console.log(`No Work Days: ${noWorkDays}`);
