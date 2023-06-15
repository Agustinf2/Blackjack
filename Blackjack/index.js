let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector(".message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector(".cards-el")

let player = {
    name: "Agus",
    chips: 145

}
let playerEl = document.querySelector(".player-el")
playerEl.textContent = player.name + ": $" + player.chips

        // min = Math.ceil(1);
        // max = Math.floor(10);

function getRandomCard(){
    return Math.floor(Math.random() * 13 ) + 1;
    if (randonNumber > 10){
        return 10
    }
    else if (randonNumber  === 10){
        return 11
    }else{
        return randonNumber
    }
    }
      // Ahora, tanto el valor mínimo como el máximo están incluidos en el resultado.


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=  [firstCard,secondCard ]
    sum = firstCard + secondCard



    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "// + cards[0] + " " + cards[1]
    
    for (let i = 0; i < cards.length; i ++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true || hasBlackJack === true  ){
    let card = getRandomCard()
    sum += card
    // Push the card to the cards array
    cards.push(card)
    console.log(cards)
    renderGame()} 
    messageEl.textContent = message
}













/*
if (age < 21){
    console.log("You can not enter to the club !")
} else /*(age >= 21){
    console.log("Welcome!")
}

let age1 = 101

if (age < 100){
    console.log("Not elegible")
}
else if (age === 100){
    console.log("Happy birthday , here is your card from the king")
}
else {
    console.log("You already gotten one")
}*/