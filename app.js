

let even = [1, 2, 3, 4, 5].every((el)=> {
    return el% 2 == 0
});

console.log(even); // false

let odd = [3,5,7].every((el)=>{
    return el % 2 == 1
});

console.log(odd); // true