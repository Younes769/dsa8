function remVowl(word){
    let Novowels = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== "a" && word[i] !== "e" && word[i] !== "i" && word[i] !== "o" && word[i] !== "u") {
            Novowels += word[i];
        }
    }
    return Novowels;
}
let word = "coucou";
let Novowels = remVowl(word);
console.log(Novowels);
