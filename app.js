let arr = [1,2,3,4,5,6,7,8,9];

let max = arr.reduce((acc, curr) =>{
    if(curr > acc){
        return curr;
    } else {
        return max;
    }
});
 console.log(max); // 9