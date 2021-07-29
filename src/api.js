
const departments = [
  {id: 1, name: "Antioquia"},
  {id: 2, name: "Córdoba"},
  {id: 3, name: "Bogotá"},
  {id: 4, name: "Magdalena"},
];

const cities = [
  {id: 1, name: "Medellín", idDepartment: 1},
  {id: 2, name: "Santa Helena", idDepartment: 1},

  {id: 3, name: "Montería", idDepartment: 2},
  {id: 4, name: "Momil", idDepartment: 2},

  {id: 5, name: "Bogotá", idDepartment: 3},

  {id: 6, name: "Santa Marta", idDepartment: 4},
  {id: 7, name: "Aracataca", idDepartment: 4},
  {id: 8, name: "Fundación", idDepartment: 4},
]


export function getDepartments(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(departments)
    }, 2000);
  });
}

export function getCitiesByDepartments(idDepartment){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cities.filter(x => x.idDepartment == idDepartment));
    }, 2000);
  });
}
