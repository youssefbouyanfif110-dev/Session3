
let nombres = [23, 15, 42, 9, 31, 18, 42, 5];

// 1. Recherche du maximum
let maximum = nombres[0];
let positionMax = 0;

// 2. Recherche du minimum
let minimum = nombres[0];
let positionMin = 0;

for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] > maximum) {
        maximum = nombres[i];
        positionMax = i;
    }

    if (nombres[i] < minimum) {
        minimum = nombres[i];
        positionMin = i;
    }
}

console.log("Maximum :", maximum, "(Index :", positionMax + ")");
console.log("Minimum :", minimum, "(Index :", positionMin + ")");

// 3. Recherche d'une valeur
let recherche = 31;
let position = -1;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === recherche) {
        position = i;
        break;
    }
}

if (position !== -1) {
    console.log("La valeur " + recherche + " est présente dans le tableau.");
} else {
    console.log("La valeur " + recherche + " est absente du tableau.");
}

// -1 signifie que la valeur n'a pas encore été trouvée.
