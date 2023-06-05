fetch('file:///home/fernando/SIte%20Una%20Capital%20(c%C3%B3pia)/cota.json').
    then(response => response.json()).
    then(function (response) {
    let resposta = response
    resposta = resposta['dados'];
    let dados = []
    for(let i = 0; i < resposta['Cota'].length; i++){
        dados.push([resposta['Cota'][i], resposta['Mês'][i], resposta['Ano'][i], resposta['12 Meses'][i], resposta['24 Meses'][i], resposta['36 Meses'][i], resposta['60 Meses'][i]])
    }
        for(let i = 0; i < 7; i++){
            let div = document.getElementById(`${i + 1}`);
            div.innerHTML = dados[0][i];
            let div2 = document.getElementById(`${i + 11}`);
            div2.innerHTML = dados[1][i];
            let div3 = document.getElementById(`${i + 21}`);
            div3.innerHTML = dados[2][i];
            let div4 = document.getElementById(`${i + 31}`);
            div4.innerHTML = dados[3][i];
        }

})
.catch(error => console.log(error));
