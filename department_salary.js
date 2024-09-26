//Task 1: Initialize company structure with departments and employees
const company = {
    departments: [
        {departmentName: 'Engineering',
    employees: [{name: 'Julia',
                    salary: 10000,
                    subordinates:[
                        {name:'Bob',
                        salary: 80000,
                        subordinates:[
                            {name:'Charlie',
                            salary: 60000,
                            subordinates:[]
                                } ]
                            }]
                        },
                    {name:'David',
                    salary: 90000,
                    subordinates:[],}
        ]},
        {departmentName: 'Sales',
     employees: [{name: 'Eve',
                salary: 85000,
                subordinates: [
                        {name: 'Frank',
                        salary: 70000,
                        subordinates: []
                }]},
                {name: 'Grace',
                salary: 95000,
                subordinates: []
          }]
        } ]};
        
//Practiced Using ForEach Method to Display a Visually Pleasing Summary of Company Data:)
company.departments.forEach(department=>{console.log(`
${department.departmentName} Department:`);

    department.employees.forEach(employee=>{console.log(`
Employee Name: ${employee.name}
    Salary: $${employee.salary}`);

employee.subordinates.forEach(subordinate=>{console.log(`
    Subordinates: 
        Name:${subordinate.name}
        Salary:$${subordinate.salary}`);

subordinate.subordinates.forEach(subordinate=>{console.log(`
        Subordinates:
            Name: ${subordinate.name}
            Salary:$${subordinate.salary}`)})})})});

//Task 2: Create recursive function to calculate department salary
function calculateDepartmentSalary(employee){
    let totalSalary = employee.salary;

     for (let subordinate of employee.subordinates) {
        totalSalary += calculateDepartmentSalary(subordinate);
     }
     return totalSalary;
     
}
//Create function to find total by department name
function calculateTotalDepartmentSalary (departmentName){
    let totalDepartmentSalary = 0;

company.departments.forEach(department=>
    {if(department.departmentName===departmentName){
department.employees.forEach(employee => {totalDepartmentSalary += calculateDepartmentSalary(employee)

});
    }});

return totalDepartmentSalary;
}
    
const engineeringSalary = calculateTotalDepartmentSalary('Engineering')
const salesSalary = calculateTotalDepartmentSalary('Sales')
console.log(`
Total Salary of Each Department:
Engineering: $${engineeringSalary}
Sales: $${salesSalary}`)

//Task 3: Calculate total salary for all departments in the company
function calculateCompanySalary (a,b){
    let totalCompanySalary = a + b;
return totalCompanySalary}
console.log(`Total Company Salary: $${calculateCompanySalary(engineeringSalary,salesSalary)}`)