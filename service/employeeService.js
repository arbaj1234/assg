const employees = [
    { country: "USA", city: "New York", dateOfHire: "2018-01-01", dateOfBirth: "1980-01-01", gender: "Male" },
    { country: "USA", city: "Los Angeles", dateOfHire: "2019-02-01", dateOfBirth: "1985-01-01", gender: "Female" },
    { country: "Canada", city: "Toronto", dateOfHire: "2020-03-01", dateOfBirth: "1990-01-01", gender: "Male" },
    { country: "Canada", city: "Vancouver", dateOfHire: "2021-04-01", dateOfBirth: "1995-01-01", gender: "Female" },
    { country: "UK", city: "London", dateOfHire: "2017-05-01", dateOfBirth: "1982-01-01", gender: "Male" },
  ];
  
  const calculateTenure = (dateOfHire) => {
    const now = new Date();
    const hireDate = new Date(dateOfHire);
    return now.getFullYear() - hireDate.getFullYear();
  };
  
  const calculateAge = (dateOfBirth) => {
    const now = new Date();
    const birthDate = new Date(dateOfBirth);
    return now.getFullYear() - birthDate.getFullYear();
  };
  
  const getOverallHeadcount = () => {
    return employees.length;
  };
  
  const getCountryHeadcounts = () => {
    const countryHeadcounts = employees.reduce((acc, emp) => {
      acc[emp.country] = (acc[emp.country] || 0) + 1;
      return acc;
    }, {});
    return countryHeadcounts;
  };
  
  const getCityHeadcounts = () => {
    const cityHeadcounts = employees.reduce((acc, emp) => {
      acc[emp.city] = (acc[emp.city] || 0) + 1;
      return acc;
    }, {});
    return cityHeadcounts;
  };
  
  const getAverageTenureByCountry = () => {
    const countryTenure = employees.reduce((acc, emp) => {
      acc[emp.country] = acc[emp.country] || [];
      acc[emp.country].push(calculateTenure(emp.dateOfHire));
      return acc;
    }, {});
  
    const averageTenureByCountry = {};
    for (const country in countryTenure) {
      const sum = countryTenure[country].reduce((a, b) => a + b, 0);
      averageTenureByCountry[country] = sum / countryTenure[country].length;
    }
    return averageTenureByCountry;
  };
  
  const getEmployeeAgeGroups = () => {
    const ageGroups = { '18-25': 0, '26-35': 0, '36-45': 0, '46-55': 0, '56+': 0 };
    employees.forEach(emp => {
      const age = calculateAge(emp.dateOfBirth);
      if (age >= 18 && age <= 25) ageGroups['18-25']++;
      else if (age >= 26 && age <= 35) ageGroups['26-35']++;
      else if (age >= 36 && age <= 45) ageGroups['36-45']++;
      else if (age >= 46 && age <= 55) ageGroups['46-55']++;
      else ageGroups['56+']++;
    });
    return ageGroups;
  };
  
  const getGenderRatioByCity = () => {
    const genderRatioByCity = employees.reduce((acc, emp) => {
      if (!acc[emp.city]) {
        acc[emp.city] = { Male: 0, Female: 0 };
      }
      acc[emp.city][emp.gender]++;
      return acc;
    }, {});
    return genderRatioByCity;
  };
  


  export {
    getOverallHeadcount,
    getCountryHeadcounts,
    getCityHeadcounts,
    getAverageTenureByCountry,
    getEmployeeAgeGroups,
    getGenderRatioByCity
  };
  