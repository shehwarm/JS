let arr = [10, 15, 20, 25, 30, 35, 40, 45, 50];

let multiple = arr.every((el)=>{
    return  el % 10 == 0;
})

console.log(multiple); 
// This code checks if every element in the array is a multiple of 10.