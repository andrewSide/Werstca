const API_URL = "https://jsonplaceholder.typicode.com/post";

const param = {
    method: "POST",
    body: JSON.stringify({title: "Andrew post", description: "test post"}),
}

fetch(API_URL, param);

document.getElementById("knopka").addEventListener('click() => {

})