// const FetchAIP = (url) => {
//   const result = fetch(url)
//     .then((respone) => respone.json())
//     .then((data) => {
//       return data;
//     });
//     return result;
// };
const FetchAIP = async(url) => {
  const respone = await fetch(url);
  const result = await respone.json();
  return result;
}
FetchAIP("https://dummyjson.com/products/categories").then(data => (console.log(data)))