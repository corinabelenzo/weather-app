console.log('Client side javascript file is loaded!')

const searchForm = document.querySelector('form')
const searchInput = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From Javascript'

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const address = searchInput.value
    const url = 'http://localhost:3000/weather?address=' + address

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})