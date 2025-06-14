//kế thừa
class School {
    constructor(id, name, birthYear) {
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
    }
    calcAge(currenAge) {
        return currenAge - this.birthYear;
    }
}
//student kế thừa từ lớp school
// class Student1 extends School {

// } //khi không có thêm thuộc tính gì

class Student1 extends School {
    constructor(id, name, birthYear, major) {
        super(id, name, birthYear) // gọi hàm constructor của lớp cha
        this.major = major;
    }
    study() {
        console.log(`${this.name} is studying ${this.major}`)
    }
}
const p1 = new School("9393939", "huhu", 2000);
console.log(p1.name)
const s1 = new Student1("939388", "haha", 2002, "IT");
console.log(s1.name)
s1.study();

//bài tập
class Shape {
    constructor(name) {
        this.name = name;
    }c
    caculateAera() {
        return 0;
    }
}
class Square extends Shape {
    constructor(name, side) {
        super(name);
        this.side = side;
    }
    caculateAera() {
        return this.side * this.side;
    }
}
class Rectange extends Shape {
    constructor (name, width, height) {
        super(name);
        this.width = width;
        this.name = name;
    }
    caculateAera() {
        return this.width * this.height;
    }
}
const hv = new Square("Hình vuông", 5);
console.log(hv.caculateAera());

class Wallet {
    #pin; // private
    #balance;
    #isPin = false;
    constructor(bankName, pin){
        this.bankName = bankName;
        this.#pin = pin;
        this.#balance = 0 // tài khaonr lúc tạo thẻ  =  0 đồng
    }
    deposit(value) {
        this.#balance += value;
    }
    // private method
    #validatePin (pin) {
        return this.#pin === pin;
    }
    //public method
    enterPin(pin) {
        if(this.#validatePin(pin) === true){
            this.#isPin = true;
        }else this.#isPin = false;
    }
    withdraw(value) {
        if(!this.#isPin) {
            console.log("Vui lòng kiểm tra lại mã Pin");
            return;
        }
        if(value > this.#balance) {
            console.log("Số tiền trong tài khoản không đủ");
        }else{
            console.log("Rút tiền thành công");
            this.#balance -= value;
        }
    }
    get balance() {
        if(!this.#isPin) {
            console.log("Vui lòng kiểm tra lại mã PIN");
            return false;
        }
        return this.#balance;
    }
}
const wallet = new Wallet("MB Bank", "1938290");
// console.log(wallet.#balance);
wallet.deposit(1000);
// console.log(wallet.#balance);

// console.log(wallet.#balance)
wallet.enterPin("1938290");
wallet.withdraw(50);
console.log(wallet.balance) // gọi get ko cần ();