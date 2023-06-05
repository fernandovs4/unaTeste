fetch('https://earnest-torte-8a0636.netlify.app/cota.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then(function(response) {
    let resposta = response;
    resposta = resposta['dados'];
    let dados = [];
    for (let i = 0; i < resposta['Cota'].length; i++) {
      dados.push([
        resposta['Cota'][i],
        resposta['Mês'][i],
        resposta['Ano'][i],
        resposta['12 Meses'][i],
        resposta['24 Meses'][i],
        resposta['36 Meses'][i],
        resposta['60 Meses'][i]
      ]);
    }
    for (let i = 0; i < 7; i++) {
      let div = document.getElementById(`${i + 1}`);
      if (dados[0]) {
        div.innerHTML = dados[0][i];
      }
      let div2 = document.getElementById(`${i + 11}`);
      if (dados[1]) {
        div2.innerHTML = dados[1][i];
      }
      let div3 = document.getElementById(`${i + 21}`);
      if (dados[2]) {
        div3.innerHTML = dados[2][i];
      }
      let div4 = document.getElementById(`${i + 31}`);
      if (dados[3]) {
        div4.innerHTML = dados[3][i];
      }
    }
  })
  .catch(error => console.log(error));

