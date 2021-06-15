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

const getInfoUsuario = async(id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del empleado: ${empleado} es de ${salario}`;
  } catch (err) {
    // return err 
    throw err;
  }
};

const id = 1;

getInfoUsuario(id)
  .then(msg => {
    console.log('TODO BIEN')
    console.log(msg)
  })
  .catch(err => {
    console.log('TODO MAL')
    console.log(err)
  });



