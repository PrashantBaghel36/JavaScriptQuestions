// Employee Payroll Class with Validations
class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = this.validateId(id);
        this.name = this.validateName(name);
        this.salary = this.validateSalary(salary);
        this.gender = this.validateGender(gender);
        this.startDate = this.validateStartDate(startDate);
    }

    // Validate Employee ID (Non-zero positive number)
    validateId = (id) => {
        try {
            if (id <= 0 || !Number.isInteger(id)) {
                throw new Error("Invalid ID: Must be a positive non-zero number.");
            }
            return id;
        } catch (error) {
            console.error(error.message);
            return null;
        }
    };

    // Validate Name using Regex (Starts with capital & at least 3 characters)
    validateName = (name) => {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        try {
            if (!nameRegex.test(name)) {
                throw new Error("Invalid Name: Must start with a capital letter and have at least 3 characters.");
            }
            return name;
        } catch (error) {
            console.error(error.message);
            return "Invalid Name";
        }
    };

    // Validate Salary (Positive number)
    validateSalary = (salary) => {
        try {
            if (salary <= 0) {
                throw new Error("Invalid Salary: Must be a positive number.");
            }
            return salary;
        } catch (error) {
            console.error(error.message);
            return 0;
        }
    };

    // Validate Gender (Only "M" or "F")
    validateGender = (gender) => {
        const genderRegex = /^[MF]$/;
        try {
            if (!genderRegex.test(gender)) {
                throw new Error('Invalid Gender: Must be "M" or "F".');
            }
            return gender;
        } catch (error) {
            console.error(error.message);
            return "Invalid Gender";
        }
    };

    // Validate Start Date (Cannot be a future date)
    validateStartDate = (startDate) => {
        const today = new Date();
        const inputDate = new Date(startDate);
        try {
            if (inputDate > today) {
                throw new Error("Invalid Start Date: Cannot be a future date.");
            }
            return inputDate;
        } catch (error) {
            console.error(error.message);
            return new Date(); // Default to today if invalid
        }
    };

    // Method to display Employee Details
    getDetails = () => {
        return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary.toLocaleString()}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
    };
}

// Creating Employee Payroll Objects
const emp1 = new EmployeePayroll(101, "John Doe", 50000, "M", "2023-03-01");
const emp2 = new EmployeePayroll(-5, "jane", -60000, "X", "2025-07-15"); // Invalid Data Example
const emp3 = new EmployeePayroll(103, "Mike Johnson", 55000, "M", "2021-11-10");

// Storing Employees in an Array
const employeeList = [emp1, emp2, emp3];

// Displaying Employee Payroll Data
console.log("Validated Employee Payroll Data:");
employeeList.forEach(emp => console.log(emp.getDetails()));
