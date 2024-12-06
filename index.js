// Employee Object
const employee = {
    name: "Elias",
    streetAddress: "44 Banda"
  };
  
  // Functions
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }