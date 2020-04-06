import listagem from './webserver'
let lDate = []
let lconf = []
let lreco = []
let ldeat = []

listagem().forEach(({ date, confirmed, recovered, deaths }) =>
	lDate = [date],
	lconf = [confirmed],
	lreco = [recovered],
	ldeat = [deaths]
);

new Chart(document.getElementById("covid"), {
	type: 'line',
	data: {
	  labels: [date],
	  datasets: [{ 
		  data: [86,114,106,106,107,111,133,221,783,2478],
		  label: "Infectados",
		  borderColor: "#3e95cd", 
		  fill: false
		}, { 
		  data: [282,350,411,502,635,809,947,1402,3700,5267],
		  label: "Recuperados",
		  borderColor: "#3cba9f",
		  fill: false
		}, { 
		  data: [deaths],
		  label: "Fatalidades",
		  borderColor: "#c45850",
		  fill: false
		}
	  ]
	},
	options: {
	  title: {
		display: true,
		text: 'Panorâma do Covid-19'
	  }
	}
  });