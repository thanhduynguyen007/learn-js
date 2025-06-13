

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 *60 *1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
} 

function getCookie (cname) {
    let name = cname +"=";
    let ca = document.cookie.split(";");
    for(var i = 0; i < ca.length; i++) {
        let c = ca[i];
        while(c.charAt(0) == ' ') {
            c = c.substring(1);
        } if(c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

console.log(getCookie("name"));

function checkCookie() {
    let username = getCookie("username");
    if(username != "") {
        alert("Xinh chào ban "+ username);
    }else {
        username = prompt("Vui lòng nhập tên: ",  );
        if(username != "" && username != null) {
            setCookie("username", username, 2);
            alert("Xin chào " + username);
        }
    }
}
checkCookie()

function deleteCookie(cname) {
    document.cookie =`${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
} 
function deleteInfo() {
    let res = confirm("Bạn có muốn đăng xuất");
    if(res == true) {
        deleteCookie("username");
    window.location.reload();
    }
    
}