const makeRandomName = () => {
    fetch('http://localhost:3000/random-name')
    .then(res => res.json())
    .then(result => {
        nameDiv.innerHTML = `<h2>${result.first_name} ${result.last_name}</h2>`
    })
}