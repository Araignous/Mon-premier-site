//alert("ok")

// recuperer le composant bouton
const myButton = document.getElementById('myButton')

// recuperer le composant paragraphe
const compteur = document.getElementById('compteur')

// variable pour memoriser le nombre de clicks
let count = 0

// lorsqu'on click dessus on fait un message
myButton.addEventListener('click', () => {
    count++
    compteur.textContent = count.toString()

    if (count == 10){
        myButton.textContent = 'click ta grosse darrone'

    }else if(count == 100) {
        myButton.textContent = 'click ta grossse coquine de soeur '
    }


})

