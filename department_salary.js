//Initialize company structure with departments and employees
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