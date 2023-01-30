
const baseURL = 'http://localhost:5678'

const displayBurgers = document.querySelector('#burgerDisplay')
const addNewBurger = document.querySelector('#addBurger')


const createBurgerCard = (burger) => {

    const newBurgerCard = document.createElement('section')
    newBurgerCard.classList.add('burger-card')

    newBurgerCard.innerHTML = `
        <img alt='burger picture' src=${burger.picture}/>
        <p>${burger.name}</p>

        <section>
            <button onclick="updateBurger(${burger.id}, 'downvote')" >Down</button>
            Popularity: ${burger.votes}
            <button onclick="updateBurger(${burger.id}, 'upvote')">Up</button>
        </section>

        </br>
        </br>

        <button onclick="deleteBurger(${burger.id})">Delete Me</button>

        <br/>
        <br/>
        <br/>
        <br/>

    `

    displayBurgers.appendChild(newBurgerCard)

}

const displayAllBurgers = (arr) => {
    for(let i = 0; i < arr.length; i++){
        createBurgerCard(arr[i])
    }
}


const getAllBurgers = () => {
    axios.get(`${baseURL}/burgers`)
        .then((res) => {
            console.log(res.data)

            displayAllBurgers(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}


const addBurger = () => {

    displayBurgers.innerHTML = ``

    const name = document.querySelector('#burgerName')
    const picture = document.querySelector('#burgerPicture')

    let bodyObj = {
        name: name.value,
        url: picture.value
    }

    axios.post(`${baseURL}/burgers`, bodyObj)
        .then((res) => {
            console.log(res.data)

            displayAllBurgers(res.data)

            name.value = ''
            picture.value = ''
        })
        .catch((err) => {
            console.log(err)
        })

}


const deleteBurger = (id) => {

    axios.delete(`${baseURL}/burgers/${id}`)
        .then((res) => {
            console.log(res.data)

            displayBurgers.innerHTML = ``

            displayAllBurgers(res.data)
        })
        .catch((err) => {
            console.log(err)
        })      
}

const updateBurger = (id, type) => {

    let bodyObj = {
        type: type
    }

    axios.put(`${baseURL}/burgers/${id}`, bodyObj)
        .then((res) => {
            console.log(res.data)

            displayBurgers.innerHTML = ``

            displayAllBurgers(res.data)
        })
        .catch((err) => {
            console.log(err)
        })  
}


addNewBurger.addEventListener('click', addBurger)

getAllBurgers()