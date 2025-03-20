// Employee Payroll Class
class EmployeePayroll {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display Employee Details
    getDetails = () => `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`;
}

// Creating Employee Payroll Objects
const emp1 = new EmployeePayroll(101, "John Doe", 50000);
const emp2 = new EmployeePayroll(102, "Jane Smith", 60000);
const emp3 = new EmployeePayroll(103, "Mike Johnson", 55000);

// Storing Employees in an Array
const employeeList = [emp1, emp2, emp3];

// Displaying Employee Payroll Data
console.log("Employee Payroll Data:");
employeeList.forEach(emp => console.log(emp.getDetails()));
