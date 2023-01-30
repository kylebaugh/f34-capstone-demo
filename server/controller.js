let burgers = require('./db.json')

let globalID = 4

module.exports = {
    getBurgers: (req, res) => {
        res.status(200).send(burgers)
    },

    addBurger: (req, res) => {
        const {name, url} = req.body

        let newBurger = {
            id: globalID,
            name: name, 
            picture: url,
            votes: 0
        }

        burgers.push(newBurger)

        globalID++

        res.status(200).send(burgers)

    }, 

    deleteBurger: (req, res) => {
        const index = burgers.findIndex((el) => el.id === +req.params.id)

        burgers.splice(index, 1)

        res.status(200).send(burgers)
    },

    updateBurger: (req, res) => {
        const index = burgers.findIndex((el) => el.id === +req.params.id)

        const {type} = req.body

        if(type === 'upvote'){
            burgers[index].votes++
        }else if(type === 'downvote'){
            burgers[index].votes--
        }

        res.status(200).send(burgers)

    }
}