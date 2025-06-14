// dom basic
const id = document.getElementById("hehehe");// trả về thẻ mà nó gọi tới
console.log(id)

const tag = document.getElementsByTagName("p"); // trả về mảng oject
console.log(tag) // tag[0], tag[1];

const classname = document.getElementsByClassName("huhuhu"); // trả về mảng oject
console.log(classname) //classname[0];

const selector = document.querySelector(".huhuhu");// trả về phần tử mà nó chỉ tới
console.log(selector)

const selectorAll = document.querySelectorAll("div"); // trả về một list node
console.log(selectorAll)

document.querySelector("h1").innerHTML = "Đây là thẻ h mới sửa"; // thay đổi nội dung element thay đổ vào file html

document.querySelector(".huhuhu").setAttribute("style", "color:red"); // thay đổi giá trị của thuộc tính

const getA = document.querySelector(".huhuhu").getAttribute("style");
const getb = document.querySelector(".huhuhu").getAttribute("class"); // lấy giá trị của thuộc tính
console.log(getA); console.log(getb);

//thêm class cho element;
const ad = document.querySelector(".thediv");
ad.classList.add("active");

// xoá class
ad.classList.remove("active");

//nếu chưa có thì thêm còn có rồi thì xoá
ad.classList.toggle("active");
//END DOM BASIC


// DOM EVENT
const btn = document.querySelector(".btn");
btn.onclick = () => {
    alert("Bạn đã click vào nút này rồi hé hé!");
}

const btn1 = document.querySelector(".btn1");
btn1.onblur = () => {
    btn1.setAttribute("style", "color: red");
}
const input1 = document.querySelector(".input1");
input1.onkeydown = (e) => {
    // console.log(e.target.value);
    console.log(e);
}

const input2 = document.querySelector(".input2");
input2.onkeyup = (e) => {
    // console.log("bạn đã bấm nút");
    console.log(e)
}

const pclick = document.querySelector(".huhuhu");
pclick.addEventListener("click", (e) => {
    pclick.setAttribute("style", "background:pink"); // ghi e lúc cần dùng tới thôi nhé
})


//END DOM EVENT

//DOM NAVIGATION
const parent = document.querySelector(".divcon"); // truy cập phần tử cha
console.log(parent.parentNode)
const chill = document.querySelector(".divcha");
console.log(chill.childNodes); // trả về node list các phần tử con của thẻ
console.log(chill.nodeName) // trả về tên của thẻ (node);
console.log(chill.firstElementChild); // trả về phần tử đầu tiên
console.log(chill.lastElementChild) // trả về phần tử cuối cùng;
console.log(chill.nextElementSibling) // trả về node kế tiếp;

//END DOM NAVIGATION

//DOM NODE

var thep = document.createElement("p");// tạo thẻ p
document.body.appendChild(thep);// thêm thẻ p vào trong body dưới cùng (nếu không có dòng này thì thẻ p ko đc hiển thị)
thep.innerHTML = "thẻ p mới tạo bằng js";// thêm thông tin

var text = document.createTextNode("Hello đây không phải là thẻ html"); // tạo chuỗi không phải thẻ
document.body.appendChild(text);


var theh = document.createElement("h1");
document.querySelector(".chaudiv").appendChild(theh).innerHTML = "con của thẻ p và là cháu của divcon";
// muốn xoá thì dùng removeChild(node_remove) tương tự appenchild
// const thepcondivcon = document.querySelector(".chaudiv");
// const p = document.createElement("p");
// document.querySelector(".divcon").replaceChild(p, thepcondivcon)
