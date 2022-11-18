const loginbtn = document.getElementById("loginbtn")
const pinlabel = document.getElementById("pinLABEL")
let PIN = "1234";

loginbtn.addEventListener('click', () => {
	if (pinlabel.value === PIN) {
		location.href = "file:///C:/Users/asalas/Desktop/Miner%C3%ADa%20de%20datos/LIC/PROYECTO/PokemonBank/menu.html#"
	}
	else {
		window.alert("Incorrect PIN!");
	
	}
	
})
