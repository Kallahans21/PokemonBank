const loginbtn = document.getElementById("loginbtn")
const pinlabel = document.getElementById("pinLABEL")
let PIN = "1234";

loginbtn.addEventListener('click', () => {
	if (pinlabel.value === PIN) {
		location.href = "menu.html#"
	}
	else {
		window.alert("Incorrect PIN!");
	
	}
	
})
