let students = [
    {
        name: "John Doe",
        marks: 80,
    },
    {        
        name: "Jane Smith",
        marks: 92
    },

];

let gpa= students.map((el) =>{
    return el.marks/10;
}
);
console.log(gpa);