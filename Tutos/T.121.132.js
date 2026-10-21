let notes = [12, 8, 15, 9, 17];

notes[1] = 10;
notes[3] = 11;

// Lire notes[2] donne sa valeur, modifier notes[2] = 10 remplace cette valeur.
console.log("Première note :", notes[0]);
console.log("Dernière note :", notes[notes.length - 1]);
console.log("Tableau final :", notes);
console.log("Nombre de notes :", notes.length);