const FetchApi = async(url) => {
    const respone = await fetch(url);
    const result = await respone.json();
    return result;
}


 FetchApi("https://dummyjson.com/products")
 .then(data => {
    let html = "";
    data.products.forEach(item => {
        html += `
            <div class="product-item">
                <img src="${item.thumbnail}" alt="${item.title}">
                <h2>${item.title}</h2>
                <p>${item.price}$</p>
            </div>
        `
    });
    const divProducts = document.querySelector(".products");
    divProducts.innerHTML = html;
 })