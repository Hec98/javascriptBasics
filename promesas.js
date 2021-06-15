const empleados = [
  {
    id: 1,
    nombre: 'Héctor'
  },
  {
   id: 2,
    nombre: 'Linda'
  },
  {
   id: 3,
    nombre: 'juan'
  }
];

const salarios = [
  {
    id: 1,
    salario: 15000
  },
  {
   id: 2,
   salario: 10000
  }
];

// const getEmpleado = (id) => {
//   const promesa = new Promise((resolve, reject) => {
//     const empleado = empleados.find(e => e.id === id)?.nombre;
//     if(empleado) {
//       resolve(empleado)
//     } else {
//       reject(`No existe empleado con id ${id}`)
//     }
//   });
//   return promesa;
// };

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;
    (empleado) // if ternariog 
      ? resolve(empleado)
      : reject(`No existe empleado con id ${id}`);
    }
  );
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find(s => s.id === id)?.salario;
    (salario) // if ternario
      ? resolve(salario)
      : reject(`No existe salario con el id ${id}`)
  })
};


const id = 1;

// getEmpleado(id)
//   .then(empleado => console.log(empleado))
//   .catch(err => console.log(err));
 
// getSalario(id)
//   .then(salario => console.log(salario))
//   .catch(err => console.log(err))

// getEmpleado(id)
//   .then(empleado => {
//     getSalario(id)
//       .then(salario => {
//         console.log(`El empleado: ${empleado} tiene un salario de: ${salario}`)
//       })
//       .catch(err => console.log(err));
//   })
//   .catch(err => console.log(err));

let nombre;

getEmpleado(id)
  .then(empleado => {
    nombre = empleado;
    return getSalario(id);
  })
  .then(salario => console.log(`El empleado ${nombre} tiene un salario de: ${salario}`))
  .catch(err => console.log(err));
