const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
    const newEmployees = 
          {
              name: name,
              email: email,
              joinYear: joinYear,
          };
  
      employees.push(newEmployees);
  }
   addEmployee('Aisyah', 'aisyah@dicoding.com', 2021);
   addEmployee('Ifa', 'ifa@dicoding.com', 2023);
  
   console.log(employees);
  