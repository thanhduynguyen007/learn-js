let student = {
    fullName : "Nguyen Thanh Duy",
    birthYear : 2005,
    address: {
        city: "HCM",
        country: "VN",
    },
    score : [10, 10, 10],
    getAge: function() {
        return 2025 - this.birthYear;
    }
}
console.log(student.fullName)
console.log(student["fullName"]);

let keys = Object.keys(student); // trả về các key
console.log(keys)

let values = Object.values(student); // trả về các value
console.log(values)
console.log(student.hasOwnProperty("fullName")); // kiểm tra có key đó không 


//constructor
// function Student (fullName,ID, birthYear, homeTown ) {
//     this.fullName = fullName;
//     this.ID = ID;
//     this.birthYear = birthYear;
//     this.homeTown = homeTown;

//     this.showInfo = function () {
//         return `${this.fullName} ${this.ID} ${this.birthYear} ${this.homeTown} `
//     }
// }

// const sv1 = new Student("NguyenThanhDuy", "10001", 2005, "HCM" );
// console.log(sv1.showInfo())

//ES6 
class Student {
    constructor(fullName,ID, birthYear, homeTown ) {
        this.fullName = fullName;
        this.ID = ID;
        this.birthYear = birthYear;
        this.homeTown = homeTown;
    }
    showInfo () {
       return `${this.fullName} ${this.ID} ${this.birthYear} ${this.homeTown} `
     }
}
const sv1 = new Student("NguyenThanhDuy", "10001", 2005, "HCM" );
console.log(sv1.showInfo())


class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    //instant method
    draw() {
        console.log("Phương thức đc gọi");
    }
    //static method
    static draw2 () {
        console.log("hehehehe");
    }
}
const c = new Circle(10);
c.draw();
Circle.draw2();

