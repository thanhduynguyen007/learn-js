const dulieu = document.querySelector(".input1");
// dulieu.onkeydown = (e) => {
//     console.log(e.target.value);
// }
const btn = document.querySelector(".btn");
const ul = document.createElement("ul");
document.body.appendChild(ul);

const ul1 = document.querySelector("ul")

const thaotac = (ele) => {
    const finishBtn = document.createElement("button");
    finishBtn.textContent = "Hoàn thành";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Xoá";
    ele.appendChild(finishBtn);
    ele.appendChild(deleteBtn);
    finishBtn.addEventListener("click", () => {
        ele.classList.toggle("active");
    });
    deleteBtn.addEventListener("click", () => {
        ele.removeChild(menu);
    })
}

btn.addEventListener("click", (e) => {
    if(dulieu.value!=null && dulieu.value != "") {
        const menu = document.createElement('li');
        menu.innerHTML = dulieu.value; // Tạo nút Sửa
        thaotac(menu);
        ul1.appendChild(menu);
        dulieu.value = "";
    }
   
}) 

