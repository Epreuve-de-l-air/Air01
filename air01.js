#! node

//Script qui retourne l'argument qui n'a pas de jumeaux

//Parsing
let arg = process.argv;
arg.splice(0, 2);

//Gestion d'erreur

//Function / résolution du problème
const twin = (arg) => {
  if (arg.length < 3) {
    console.log(
      "Veuillez indiquer au minimum, trois arguments au script, dont deux identiques. Example : node air01.js 1 5 1"
    );
    console.log(arg);
    return;
  }

  let value = arg.shift();
  let flag = true;
  let solution = [];

  while (arg.length !== 0) {
    for (let x = 0; x < arg.length; x++) {
      if (value === arg[x]) {
        arg.splice(x, 1);
        x--;
        flag = false;
      }
    }
    if (flag) {
      solution.push(value);
    }
    value = arg.shift();
    flag = true;
    x = 0;
  }
  for (i in solution) {
    if (value === solution || value === undefined) {
      return solution;
    }
  }
  solution.push(value);
  console.log(solution);
  return solution;
};

//Affichage
twin(arg);
