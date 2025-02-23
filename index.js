let player = {
    name: "Per",
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message=""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
console.log(cards)


playerEl.textContent = player.name + ": $" + player.chips

function randomCard(){
    let randomNum=Math.floor(Math.random()*13)+1
    if(randomNum === 1){
        return 11
    }
    else if(randomNum > 10){
        return 10
    }
    else{
        return randomNum
    }
}
function startGame(){
    let firstcard = randomCard()
    let secondcard = randomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    isAlive = true
    renderGame()
    }
function renderGame(){
    console.log("Start the game")
    if (sum <= 20) {
        message="Do you want to draw a new card?"
        isAlive = true
    }
    else if (sum === 21) {
        message=" You've got Blackjack!"
        hasBlackJack = true
    }
    else {
        message="You're out of the game!"
        
        isAlive = false
    }
    messageEl.textContent = message
    cardsEl.textContent="Cards: "
    for(let i = 0; i < cards.length; i++){
            cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    
    
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card from the Deck!!")
        let newcard = randomCard()
        sum += newcard
        cards.push(newcard)
        renderGame()
    }
}

console.log(sum)
console.log(hasBlackJack)