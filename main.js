console.log("TAREA E1 Condicionales, Ciclos y Funciones");
console.log("__________________________________________");

//EJERCICIO 1:

console.log(".........EJERCICIO 1.............");

const ParImpar = (num) => {
  if (num % 2 === 0) {
    console.log(`El número ${num} es PAR`);
  } else {
    console.log(`El número ${num} es IMPAR`);
  }
};

ParImpar(10);

console.log("_________________________________");

//EJERCICIO 2:

console.log(".........EJERCICIO 2.............");

const MayorIgual = (numA, numB) => {
  if (numA === numB) {
    console.log(`Los números son iguales`);
  } else if (numA > numB) {
    console.log(`El número ${numA} es mayor que ${numB}`);
  } else {
    console.log(`El número ${numA} es menor que ${numB}`);
  }
};

MayorIgual(40, 20);

console.log("_________________________________");

//EJERCICIO 3:

console.log(".........EJERCICIO 3.............");

const multi5 = (num) => {
  if (num % 5 === 0) {
    console.log(`El ${num} es múltiplo de 5`);
  } else {
    console.log(`El ${num} NO es múltiplo de 5`);
  }
};

multi5(43);

console.log("_________________________________");

//EJERCICIO 4:

console.log(".........EJERCICIO 4.............");

const infinite = (num) => {
  for (i = 0; i <= num; i++) {
    console.log(i);
  }
};

infinite(8);

console.log("_________________________________");

//EJERCICIO 5:

console.log(".........EJERCICIO 5.............");

const NombreMasNúmero = (nombre, numero) => {
  for (let i = 1; i <= numero; i++) {
    console.log(`${nombre} ${i}`);
  }
};

NombreMasNúmero("MOLLY", 7);

console.log("_________________________________");

//EJERCICIO 6

console.log(".........EJERCICIO 6.............");

let MiArray = [1, 2, 3, 4, 5];

const ConsoleArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
ConsoleArray(MiArray);

console.log("_________________________________");

console.log(".........EJERCICIO 7.............");

//EJERCICIO 7

let MiArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ConsoleArray2 = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i === 4) {
      console.log("La 5ta posicion de MiArray2 fue saltado");
      continue;
    } else {
      console.log(array[i]);
    }
  }
};
ConsoleArray2(MiArray2);

console.log("_________________________________");

//EJERCICIO 8

console.log(".........EJERCICIO 8.............");

const MiArray3 = [1, 2, 3, 4, 5];
const multiplicador = "num";

const multicarArray = (MiArray3, multiplicador) => {
  for (let i = 0; i < MiArray3.length; i++) {
    console.log(MiArray3[i] * multiplicador);
  }
};

multicarArray(MiArray3, 2);

console.log("_________________________________");
