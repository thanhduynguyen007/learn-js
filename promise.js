const currentPromise = new Promise((resolve, reject) => {
    let condition = false;
    if (condition) {
        setTimeout(() => {
            resolve("Thành công")
        }, 1000);
    } else {
        reject("That bai");
    }
})

currentPromise
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err)
    })