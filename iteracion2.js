// Iteración #2: Condicionales avanzados. Si tiene dos trimestres true, se considera aprobado

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (var alumn of alumns) {
  isApproved = false;
  counter = 0;

  if (alumn.T1 == true) {
    counter += 1;
  }
  if (alumn.T2 == true) {
    counter += 1;
  }
  if (alumn.T3 == true) {
    counter += 1;
  }

  if (counter >= 2) {
    isApproved = true;
  }

  console.log(alumn.name + " - " + isApproved);
}
