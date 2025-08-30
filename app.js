let country = ["Australia", "Germany","United States of America"];
let longest = "abcd";


function getLongest(country){
    let ansIdx = 0;
      
    for(let i =0; i<=country.length; i++){
        let ansLen = country[andIdx].length;
        let currLen = country[i].length;

        if(currLen > ansLen){
            ansIdx = i;
        } 

    }
    return country[ansIdx];
}

getLongest(country);

