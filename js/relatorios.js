

function baixar(pdf){
  
    fetch(`https://troqueseuvale.com.br/relatorios/?relatorio=${pdf}`, {
        method:'GET', 
        
    })
    .then(response => response.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob)

    let a = document.createElement('a')
    a.href = url
    a.download = `${pdf}`
    a.click()
  });

   
}


function RelatorioCelularAno(relatorio, ultimo_ano){
    let pdf = document.getElementById('anos')
    let selec = ''
    for (let i = 2013; i <= ultimo_ano;i++){
        selec += `<option value = ${i} > ${i}</option> \n`


    }
    pdf.innerHTML = selec
    
    
}

function RelatorioCelularMes(){

    fetch("https://troqueseuvale.com.br/relatorios/", {
        method:"GET"
    })
    .then(response => response.json())
    .then(function (response){
        console.log(response)
        let relatorio = response
        ultimo_ano = Object.keys(relatorio)[Object.keys(relatorio).length - 1]


        ano = document.querySelector('select#anos').value
        qtdMeses = relatorio[ultimo_ano].length

        let mesesh= document.getElementById('meses')
        let mes = ''
        let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        if (ano == ultimo_ano){
            for (let i = 0; i < qtdMeses; i++){
                mes += `<option value = ${i + 1} > ${meses[i]}</option> \n`
            }
        }else{
            for (let i in meses){
                mes += `<option value = ${Number(i) + 1} > ${meses[i]}</option> \n`
            }
        }
    
        mesesh.innerHTML = mes})


}
RelatorioCelularMes()

function baixarRelatorio(){
    let ano = document.querySelector('select#anos').value
    let mes = document.querySelector('select#meses').value
    if (mes < 10){
        mes = '0' + mes
    }
    let pdf = ano + '-' + mes
    console.log(pdf)
    baixar(pdf)
    
}




function relatorioPc(){
    fetch("https://troqueseuvale.com.br/relatorios/", {
        method:"GET"
    })
    .then(response => response.json())
    .then(function (response){
        let dados = response
       
        ultimo_ano = Object.keys(dados)[Object.keys(dados).length - 1]
        RelatorioCelularAno(dados, ultimo_ano)
      
        let body = ''
        Object.keys(dados).forEach(function(ano){
            let relatorios_do_mes = dados[ano]
          
            body += `<tr > <td class = "m${ano}" > ${ano} </td>`
            for(mes in relatorios_do_mes){
                
        
                body += `<td class = "m${relatorios_do_mes[mes]}"   > <abbr title= "Mainá ${relatorios_do_mes[mes]}"> <img onmouseover = 'escureceLinhaColuna("${relatorios_do_mes[mes]}", ${ultimo_ano})' onmouseout = 'clareiaLinhaColuna("${relatorios_do_mes[mes]}",  ${ultimo_ano})'  onclick = 'baixarPC("${relatorios_do_mes[mes]}")' src= 'imagens/logo-pdf.png'  > </abbr></td>`
            }
            body += '</tr>'
        })
   
        document.querySelector('tbody').innerHTML = body


    })
}

relatorioPc()

function baixarPC(relatorio){
    console.log(relatorio)
    fetch(`https://troqueseuvale.com.br/relatorios/?relatorio=${relatorio}`, {
        method:'GET', 
        
    })
    .then(response => response.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob)

    let a = document.createElement('a')
    a.href = url
    a.download = `${relatorio}`
    a.click()
  });

   
}

function escureceLinhaColuna(relatorio, ultimo_ano){
    let img  = document.querySelector(`.m${relatorio} img`)
    img.style.filter = 'brightness(50%)'
   
    console.log(relatorio)
    let meses = {"01": "Jan", "02": "Fev", "03": "Mar", "04": "Abr","05": "Mai", "06": "Jun", "07": "Jul", "08": "Ago", "09": "Set", "10": "Out", "11": "Nov", "12": "Dez"}
    let linha = relatorio.split('-')
    let ano = linha[0]
    let mes = meses[linha[1]]
    
    document.querySelector(`.m${ano}`).style.backgroundColor = '#f5f7f7'
    document.querySelector(`#${mes}`).style.backgroundColor = '#f5f7f7'
    for(let i = 1; i < 13; i++){
        if (i < 10){
            i = '0' + i
        }
        try{
        document.querySelector(`.m${ano}-${i}`).style.backgroundColor = '#f5f7f7'}
        catch{continue}
        
    }

    for(let i = 2013; i <=  Number(ultimo_ano); i++){
        try{
            document.querySelector(`.m${i}-${linha[1]}`).style.backgroundColor = '#f5f7f7'
        }catch{continue}
        
    }
    //pintar a linha e coluna correspondente


    
}

function clareiaLinhaColuna(relatorio, ultimo_ano){
    let meses = {"01": "Jan", "02": "Fev", "03": "Mar", "04": "Abr","05": "Mai", "06": "Jun", "07": "Jul", "08": "Ago", "09": "Set", "10": "Out", "11": "Nov", "12": "Dez"}
    let img  = document.querySelector(`.m${relatorio} img`)
    img.style.filter = 'brightness(100%)'
    let linha = relatorio.split('-')
    let ano = linha[0]
    let mes = meses[linha[1]]
    document.querySelector(`#${mes}`).style.backgroundColor = 'white'
    document.querySelector(`.m${ano}`).style.backgroundColor = 'white'
    document.querySelector(`.m${ano}`).style.color = 'black'
    for(let i = 1; i < 13; i++){
        if (i < 10){
            i = '0' + i
        }
        
        try{
        document.querySelector(`.m${ano}-${i}`).style.backgroundColor = 'white'
        document.querySelector(`.m${ano}`).style.padding = 0
        document.querySelector(`.m${ano}`).style.margin = 0
        }catch{continue}
    }
    for(let i = 2013; i <=  Number(ultimo_ano); i++){
        try{
        document.querySelector(`.m${i}-${linha[1]}`).style.backgroundColor = 'white'
        }catch{continue}
    }
   
    
  
}

