//Iteración #6: Mixed for... of e includes

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

const juguetesSinGato = [];

for (let toy of toys) {
  if (toy.name.includes("gato") == true) {
    continue;
  } else {
    juguetesSinGato.push(toy);
  }
}

console.log(juguetesSinGato);
