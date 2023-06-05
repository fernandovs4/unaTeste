fetch('https://earnest-torte-8a0636.netlify.app/documentos/documentos.json', {
method: 'GET'
    }).then(response => response.json())
    .then( function(response) {
        let documents = ''
        for (let i in response['documentos']){
            div = `<div class = 'documentos-2'> <img src='imagens/logo-pdf.png'> <a href = "https://earnest-torte-8a0636.netlify.app/documentos/${response['documentos'][i]}.pdf"> ${response['documentos'][i]} </a> </div>\n`
            documents += div
        }
        documents = `<div class = 'documents'> ${documents} </div>`  
        document.querySelector('.documentos').innerHTML = documents
    }
    )
    .catch(error => console.log(error))





// function baixar(documento){
//     fetch(`https://troqueseuvale.com.br/documentos/?documento=${documento}`, {
//         method: 'GET',
//     }).then(response => response.blob())
//     .then(response => {
      
//         const url = URL.createObjectURL(response)
//         let a = document.createElement('a')
//         a.href = url
//         a.download= `${documento}.pdf`
//         a.click()
//     })
//     .catch(error => console.log(error))

// }
