var list = JSON.parse(localStorage.getItem('covidList'));
var arrCovid = []
var cont = 0
function listagem(){
  let ret = []
  let sel = document.querySelector('select').value
 var array =  list[`${sel}`]
 for(var i = 0; i<array.length;i++){
  if(i>array.length -8){
  arrCovid[i] = array[i]
  ret[i] = array[i]
  chart.data.label.push(array(i).getItem)
  console.log(i)
  }
 }

  return ret
}

//Carrega os dados da api com os nomes dos paises para um array de objetos
window.onload = function () {
  fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .catch(error => console.error("Erro:" + error))
    .then(response => {
      this.Object.keys(response).forEach((obj) => {
        this.selecion(obj),
          this.localStorage.setItem('covidList', JSON.stringify(response))

      })
    });

}


//Pega o pais selecionado no seletor e carrega os dados da api com os devidos campos
function tblGrid(){
  listagem();
  arrCovid.forEach(({ date, confirmed, recovered, deaths }) =>
  this.covidTable(date, confirmed, recovered, deaths),
 
);
}
//Recebe os nomes dos paises e preenche o seletor
function selecion(country) {

  let pSelect = document.getElementById('cselect');
  let pOpt = document.createElement('option');

  pOpt.innerHTML = `<option>${country}</option>`;

  pSelect.appendChild(pOpt);

}


//Preenche a tabela com os dados do pais selecionado
function covidTable(date, confirmed, recovered, deaths) {

  let pTable = document.getElementById('covidtable');
  let tRow = document.createElement('tr');


  tRow.innerHTML = `
        <td>${date}</td>
        <td>${confirmed}</td>
        <td>${recovered}</td>
        <td>${deaths}</td>
    `;
  pTable.appendChild(tRow);

  listagem();

}

arr = [21-02-2020,03-05-2020]
let chart = new Chart(document.getElementById("covid"), {
	type: 'line',
	data: {
	  labels: [arr],
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
		  data: [282,350,411,502,635,809,947,1402,3700,5267],
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