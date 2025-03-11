const API_URL = "https://jsonplaceholder.typicode.com/photos";
const isLoading = false

async function getFotos() {
  try {
    makeLoading(true)
    isLoading = true
    const res = await fetch(API_URL);
    return await res.json();
  } catch (err) {
    console.log(err);
  } finally {
  }
}

function makeLoading(loading) {
const root = document.getElementById("root")
if(loading) root.textContent = "Loading"
else root.textContent
}