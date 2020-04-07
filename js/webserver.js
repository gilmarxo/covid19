var list = JSON.parse(localStorage.getItem('covidList'));
var arrCovid = []

function listagem() {
  var date = [];
  var confirmed = [];
  var recovered = [];
  var deaths = [];
 
  let sel = document.querySelector('select').value;
  let cout = document.getElementById('namepais');
  cout.innerHTML = sel;
  var array = list[`${sel}`]
  for (var i = 0; i < array.length; i++) {
    if (i > array.length - 8) {
      arrCovid.push(array[i])
      date.push(array[i].date);
      confirmed.push(array[i].confirmed);
      recovered.push(array[i].recovered);
      deaths.push(array[i].deaths);
      
    }
    
  }
  console.log(arrCovid)
  grafico(date, confirmed, recovered, deaths);
}
function limparLista() {
  var myNode = document.getElementById("dadostable");
  var fc = myNode.firstElementChild;
  
  while( fc ) {
      myNode.removeChild( fc );
      fc = myNode.firstChild;
  }
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
function tblGrid() {

  arrCovid.length = 0
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

Date.prototype.formatMMDDYYYY = function () {
  return (this.getMonth() + 1) +
    "-" + this.getDate() +
    "-" + this.getFullYear();
}
function grafico(date, confirmed, recovered, deaths) {


  new Chart(document.getElementById("covid"), {

    type: 'line',
    data: {
      labels: date,
      datasets: [{
        data: confirmed,
        label: "Infectados",
        borderColor: "#3e95cd",
        fill: false
      }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Panorâma do Covid-19'
      }
    },

  });

  new Chart(document.getElementById("covidComp"), {

    type: 'line',
    data: {
      labels: date,
      datasets: [{
        data: recovered,
        label: "Recuperados",
        borderColor: "#3cba9f",
        fill: false
      }, {
        data: deaths,
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
    },

  });
}