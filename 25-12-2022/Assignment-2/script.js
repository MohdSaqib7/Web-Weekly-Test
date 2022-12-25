const dogs = document.getElementById('dogs');

let html = ""
async function fun(){
    dogs.innerText = "waiting....."
    for(let i=0; i<9; i++){
        const api = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await api.json()
        const image = data.message

        html += `<img src="${image}" alt="Dog" class="pic">`
    }
    dogs.innerHTML = html
}