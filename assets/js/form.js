const pass = document.getElementById('pass')
const email = document.getElementById('email')
const namee = document.getElementById('name')
const surname = document.getElementById('surname')
const form1 = document.getElementById('form1')

form1.addEventListener('submit', (e) => {
    e.preventDefault()

    axios.post('https://655c844f25b76d9884fd70a7.mockapi.io/basket', {
        email: email.value,
        name: namee.value,
        surname: surname.value,
        password: pass.value,
    })

    .then(res => {
        console.log(res.data);
    })
})

