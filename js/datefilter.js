let objetos = [
    {nome: 'teste01', data: '03/09/2019'},
    {nome: 'teste02', data: '03/10/2019'},
    {nome: 'teste03', data: '03/11/2019'},
    {nome: 'teste04', data: '03/12/2019'},
    {nome: 'teste05', data: '03/01/2020'}
 ]
 
 function converteData(DataDDMMYY) {
     const dataSplit = DataDDMMYY.split("/");
     const novaData = new Date(parseInt(dataSplit[2], 10),
                   parseInt(dataSplit[1], 10) - 1,
                   parseInt(dataSplit[0], 10));
     return novaData;
 }
 
 
 let dataInicial = converteData('01/09/2019');
 let dataFinal = converteData('31/10/2019');
 let objetosFiltrados = objetos.filter(result => {
    return converteData(result.data) >= dataInicial && converteData(result.data) <= dataFinal;
 })
 console.log(objetosFiltrados);