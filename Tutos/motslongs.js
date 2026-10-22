let mots = ["chat", "ordinateur", "table", "programmation", "js", "tv"];
let motsLongs = 0;

for (let i = 0; i < mots.length; i++) {

    console.log(mots[i], "=>", mots[i].length);
    
    if (mots[i].length > 5) {
        motsLongs++;
    }

    if (mots[i][0] === "t") {
        console.log(mots[i])
    }
}

console.log("Le nombre de mots longs=", motsLongs);