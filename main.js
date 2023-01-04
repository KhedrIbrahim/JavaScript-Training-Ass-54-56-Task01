let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;


let num = index;
while (index < friends.length) {
    index++ ;
    if (friends[index][counter] === "A") {
        continue;
    }
    if (typeof friends[index] === "string"){
        console.log(`${++num} ==>  ${friends[index]}`);
    }
}


// Output
// "1 => Sayed"
// "2 => Mahmoud"