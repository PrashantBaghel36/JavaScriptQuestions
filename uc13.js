// Employee Payroll Class with Name Validation
class EmployeePayroll {
    static employeeCounter = 100; // Auto-increment ID counter

    constructor(name, salary, gender, startDate, department) {
        this.id = EmployeePayroll.employeeCounter++; // Auto-generate ID
        this.name = this.validateName(name);
        this.salary = this.validateSalary(salary);
        this.gender = gender;
        this.startDate = new Date(startDate); // Convert to Date object
        this.department = department;
    }

    // Validate Name using Regex (Starts with capital & has at least 3 chars)
    validateName = (name) => {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/; 
        try {
            if (!nameRegex.test(name)) {
                throw new Error("Invalid Name: Must start with a capital letter and have at least 3 characters.");
            }
            return name;
        } catch (error) {
            console.error(error.message);
            return "Invalid Name"; // Default name if invalid
        }
    };

    // Validate salary to ensure it's positive
    validateSalary = (salary) => {
        return salary > 0 ? salary : 0; // Prevent negative salary
    };

    // Method to display Employee Details
    getDetails = () => {
        return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary.toLocaleString()}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}, Department: ${this.department}`;
    };
}

// Creating Employee Payroll Objects
const emp1 = new EmployeePayroll("John Doe", 50000, "Male", "2023-03-01", "Engineering");
const emp2 = new EmployeePayroll("jane", 60000, "Female", "2022-07-15", "HR"); // Invalid Name Example
const emp3 = new EmployeePayroll("Mike Johnson", 55000, "Male", "2021-11-10", "Finance");

// Storing Employees in an Array
const employeeList = [emp1, emp2, emp3];

// Displaying Employee Payroll Data
console.log("Extended Employee Payroll Data:");
employeeList.forEach(emp => console.log(emp.getDetails()));
