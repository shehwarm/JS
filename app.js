let arr = [45, 23,13,56,89];
let num = 29;

function getElements(arr, num){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}

