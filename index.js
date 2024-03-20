
setInterval(showTime, 1000); // Chama a função showTime a cada 1000 milissegundos (ou seja, a cada segundo)

// Definindo a função showTime
function showTime() {
	// Obtém a hora e a data atuais
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	// Define a hora no formato de 12 horas
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "PM";
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}
	
	hour = hour < 10 ? "0" + hour : hour; // Adiciona um zero à esquerda se a hora for menor que 10
	min = min < 10 ? "0" + min : min; // Adiciona um zero à esquerda se os minutos forem menores que 10
	sec = sec < 10 ? "0" + sec : sec; // Adiciona um zero à esquerda se os segundos forem menores que 10

	let currentTime =
		hour +
		":" +
		min +
		":" +
		sec +
		am_pm;

	// Exibe o tempo na div com o id "clock"
	document.getElementById("clock").innerHTML = currentTime;
}

showTime(); // Chama a função showTime quando a página é carregada pela primeira vez
