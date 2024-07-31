function nasKbar(nas){
    let kbar = [];
    for (let i = 0; i < people.length; i++) {
        if (nas[i].age > 30) {
            kbar.push(people[i]);
        }
    }
    return kbar;

}
let people = [{ name: "younes", age: 31 }, 
     { name: "yacine", age: 25 },
     { name: "wahab", age: 30 },
     {name: "malak", age: 11 },
     {name: "anfal", age: 77},
     {name: "malik", age: 19 },
     {name: "sarah", age: 40 },];
let kbar = nasKbar(people);
console.log(kbar);