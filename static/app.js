async function getQuestion() {
    let url = "/api/coef"
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(console.log);

    return response
}