// recuperer le composant bouton
const reponsea = document.getElementById('reponsea')
const reponseb = document.getElementById('reponseb')
const reponsec = document.getElementById('reponsec')
const message = document.getElementById('message')


// lorsqu'on click dessus on fait un message
reponsea.addEventListener('click', () => {
    message.textContent = "Bonne réponse"
    reponsea.style.backgroundColor = 'green'
})
reponseb.addEventListener('click', () => {
    message.textContent = "Mauvaise réponse"
    reponseb.style.backgroundColor = 'red'

})
reponsec.addEventListener('click', () => {
    message.textContent = "Mauvaise réponse"
    reponsec.style.backgroundColor = 'red'

})