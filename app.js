let str ="Apna College";

newstr = str.trim();
str1= str.toUpperCase();
str2= str1.toLowerCase();   
str3 = str.indexOf("College");

console.log(newstr); // Output: "Apna College"
console.log(str1); // Output: "APNA COLLEGE"
console.log(str2); // Output: "apna college"
console.log(str3); // Output: 5 (index of "College" in the string)