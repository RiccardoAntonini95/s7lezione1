//ESERCIZIO 1

class user {
    constructor(_firstName, _lastName, _age, _location){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    compareAges(otherUser){
        if(this.age > otherUser.age){
            return console.log(`${this.firstName} è più vecchio di ${otherUser.firstName}`)
        } else if(this.age < otherUser.age){
            return console.log(`${this.firstName} è più giovane di ${otherUser.firstName}`)
        } else {
            return console.log(`${this.firstName} e ${otherUser.firstName} sono coetanei`)
        }
    }
}

const user1 = new user ("Maccio", "Capatonda", 18, "Laggiù")
const user2 = new user ("Ivo", "Avido", 35, "Desenzano del Garda")
const user3 = new user ("Herbert", "Ballerina", 45, "Poggibonsi")
const user4 = new user ("Bruno", "Liegibastonliegi", 50, "Castelfranco veneto")

const confrontoAnni = user1.compareAges(user4)
const confrontoAnni2 = user2.compareAges(user1)
const confrontoAnni3 = user4.compareAges(user2)

//ESERCIZIO 2

class pet{
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }
    sameOwner(anotherPet){
        if(this.ownerName === anotherPet.ownerName){
        return true
        } else {
            return false
        }
    }
}

let petList = document.querySelector("#inputPets")
let form = document.querySelector("form")
form.addEventListener("submit", getData)

function getData(e){
    e.preventDefault()
    let petName = document.querySelector("#petName").value
    let ownerName = document.querySelector("#ownerName").value
    let species = document.querySelector("#species").value
    let breed = document.querySelector("#breed").value
    let newListElement = document.createElement("li")
    newListElement.innerText = `Name: ${petName} Owner: ${ownerName} Species: ${species} Breed: ${breed}`
    petList.appendChild(newListElement)
}





