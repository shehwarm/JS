const student = {
    name: "shradha",
    age: 20,
    math: 90,
    english: 85,
    science: 88,
    getAvg() {
        let avg = (this.english + this.math + this.science) / 3;
        console.log(avg);
    }
} 

student.getAvg();