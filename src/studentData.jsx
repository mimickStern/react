/**
 * @type {STudent[]}
 */
 let students = [
    {
      name: "Naomi Shaish",
      birth: 1983,
      major: "theater",
      status: "active"
    },
    {
        name: "Arbel Stern",
        birth: 2014,
        major: "Buisness management",
        status: "active"
    },
    {
      name: "Dolev Stern",
      birth: 2019,
      major: "Philosophy",
      status: "active"
    },
    {
        name: "Alon Stern",
        birth: 2019,
        major: "Engineering",
        status: "active"
    },
    {
        name: "Ofri Stern",
        birth: 2021,
        major: "Engineering",
        status: "active"
    }
  ];
  
  export function getStudents() {
    return students;
  }