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
    salario: 1000
  },
  {
   id: 2,
   salario: 1500
  }
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find(e => e.id === id)?.nombre;
  if(empleado) {
    callback(null, empleado);
  }
  else {
    callback(`Empleado con id ${id} no existe`); 
  } 
};

const getSalario = (id, callback) => {
  const salario = salarios.find(s => s.id === id)?.salario;
  if(salario) {
    callback(null, salario);
  } else {
    callback(`Salario del id ${id} no existe`);
  }
};

const id = 1;

// getEmpleado(id, (err, empleado) => {
//   if(err) {
//     console.log('Error!');
//     return console.log(err);
//   } else {
//     console.log('Empleado existe');
//     console.log(empleado);
//   }
// });
 
// getSalario(id, (err, salario) => {
//   if(err) {
//     console.log('Error!');
//     return console.log(err)
//   } else {
//     console.log('Salario existe');
//     console.log(salario);
//   }
// });

getEmpleado(id, (err, empleado) => {
  if(err) {
    console.log('Error!');
    return console.log(err);
  } else {
    getSalario(id, (err, salario) => {
      if(err) {
        console.log('Error!');
        return console.log(err)
      } else {
        console.log(`Empleado: ${empleado}\nSalario: ${salario}`)
      }
    });
    }
});
