//Iteración #5: Probando For

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (y = 0; y < placesToTravel.length; y++) {
  if ((placesToTravel[y].id) == 11) {
    placesToTravel.splice(y, 1);
  } else if ((placesToTravel[y].id) == 40) {
    placesToTravel.splice(y, 1);
  }
}

console.log(placesToTravel)