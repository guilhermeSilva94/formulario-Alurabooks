async function buscaEndereco(cep) {
    var mensagemErro = document.querySelector('#erro')
    mensagemErro.innerHTML = ''
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!')
        }
        var cidade = document.querySelector('#cidade')
        var rua = document.querySelector('#endereco')
        var estado = document.querySelector('#estado')
        var bairro = document.querySelector('#bairro')

        cidade.value = consultaCEPConvertida.localidade
        rua.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf
        bairro.value = consultaCEPConvertida.bairro

        console.log(consultaCEPConvertida)
        return consultaCEPConvertida
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        mensagemErro.style.margin = '10px'
        console.log(erro)
    }
}

var cep = document.querySelector('#cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value))


/*.then(resposta => resposta.json())
.then(r => {
    if(r.erro) {
        throw Error('Esse CEP não existe!')
    } else 
       console.log(r) 
})
.catch(erro => console.log(erro))
.finally(mensagem => console.log('Processamento concluído!'))

console.log(consultaCEP)*/