let str = "apple";
length = str.length; 
firstLetter = str[0];
console.log("length of the string is " + length);

console.log("first letter of the string is " + firstLetter); 

if(length > 3 && firstLetter === 'a') {
    console.log("Good string");
}
else {
    console.log("Bad string");
}