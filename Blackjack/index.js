var canvas = document.querySelector(".canvas");
canvas.width = 1220 * 2;
canvas.height = 400 * 2;
canvas.style.width = 1220 + "px";
canvas.style.height = 400 + "px";
var ctx = canvas.getContext("2d");


class carta {
	static x = 50;
	static y = 50;

	constructor(valor, palo) {
		this.img = new Image();
		this.valor = valor;
		this.palo = palo;
	}
}

let cards = []
var cartasJugador = [];
var cartasCrupier = [];
var indiceCarta = 0;
var palos = ["S", "H", "D", "C"];


// Generamos las cartas. Con atributos valor y palo
for (i = 0; i < 4; i++) {
	for (j = 1; j <= 13; j++) {
		cards.push(new carta(j, palos[i]));
	}
}

for (i = 0; i < 100; i++) {
	cards.splice(Math.random() * 52, 0, cards[0]);
	cards.shift();
}

let player = {
    name: "Agus",
    chips: 145

}
function dibujarCarta(CJ) {
	// Tenemos que primero cargar la carta y luego añadir el src
 
	CJ.img.onload = () => {
		ctx.drawImage(CJ.img, carta.x, carta.y, 239, 335);
		carta.x += 300;
	};
	// Para cargar la imagen correcta concatenamos el numero y el palo, que coincida con el nombre del fichero
	CJ.img.src = "imagenes/cartas/" + CJ.valor.toString() + CJ.palo + ".svg";
}

let playerEl = document.querySelector(".player-el")
playerEl.textContent = player.name + ": $" + player.chips

function pedirCarta() {
	// Ponemos un maximo de cartas que pueda sacar para que el crupier tambíen pueda sacar las suyas
	if (indiceCarta < 8) {
		let CJ = cards[indiceCarta]; //Carta Jugada
		cartasJugador.push(CJ);
		dibujarCarta(CJ);
		indiceCarta++;
	}
}

        // min = Math.ceil(1);
        // max = Math.floor(10);
/*
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
*/

/*
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
*/
function plantarme() {
	document.querySelector(".pedir").disabled = true;
	document.querySelector(".plantar").disabled = true;
	document.querySelector(".reset").style.visibility = "visible";
	let pointsUser = 0;
	let pointsCrupier = 0;
	let info = document.querySelector(".info");
	// Contamos e imprimimos los puntos del jugador
	for (i in cartasJugador) {
		pointsUser += cartasJugador[i].valor;
	}
	// Sacamos cartas al crupier y contamos sus puntos
	while (pointsCrupier < 17) {
		cartasCrupier.push(cards[indiceCarta]);
		pointsCrupier += cards[indiceCarta].valor;
		indiceCarta++;
	}
	// Putos de la partida se ponen en info
	info.innerHTML = "Puntuación jugador: " + pointsUser + "<br>Puntuación crupier: " + pointsCrupier;
	// Dibujamos las cartas del crupier
	carta.x = 50;
	carta.y = 400;
	for (i in cartasCrupier) {
		dibujarCarta(cartasCrupier[i]);
	}
	// Comprobamos ganador
	if (pointsUser == 21) {
		info.innerHTML +="<br><b>Blackjack!!! Has ganado!</b>";
	} else if (pointsUser > 21) {
		info.innerHTML +="<br><b>Has perdido... Te has pasado de puntos</b>";
	} else if (pointsCrupier > 21) {
		info.innerHTML +="<br><b>Has ganado!!! El croupier se ha pasado de puntos</b>";
	} else if (pointsCrupier >= pointsUser) {
		info.innerHTML += "<br><b>Ha ganado el croupier...</b>";
	} else {
		info.innerHTML += "<br><b>Has ganado!!!</b>";
	}
}

//Recarga la pagina cuando se presiona el botton
function playagain() {
	location.reload(true);
}


/*
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector(".message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector(".cards-el")
*/

