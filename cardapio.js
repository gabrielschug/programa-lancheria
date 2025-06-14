const prompt = require("prompt-sync")()

const nomes = []
const categorias = []
const igredientes = []
const precos = []
const fotos = []

function inclusao(){
console.log('\n Inclusão de Produtos no Cardápio')
console.log('-'.repeat(40))
const a =        prompt('Nome do Produto......: ')
const b =        prompt('Categoria............: ').toUpperCase()
const c =        prompt('Igredientes..........: ')
const d = Number(prompt('Preço R$.............: ')).toFixed(2)
const e =        prompt('URL  da foto.........: ')

// Adicionar nos vetores
nomes.push(a)
categorias.push(b)
igredientes.push(c)
precos.push(d)
fotos.push(e)

console.log(`\n✅ Produto Cadastrado com Sucesso!\n`+`-`.repeat(40))
}

function listagem(){

    console.log('\n📋 Listagem dos Produtos Cadastrados\n' + '-'.repeat(40) + '\n\n')
    console.log(`\nProduto............: Categoria: Igredientes............................: Preço....:\n`)

    for (let i in nomes) {
        console.log(`${nomes[i].padEnd(20)} ${categorias[i].padEnd(10)} ${igredientes[i].padEnd(40)} ${precos[i].padStart(10)}`)
    }
}

function pesquisaCategoria(){
    console.log('\n🔍 Pesquisa por Categoria\n' + '-'.repeat(40) + '\n\n')
    const cat = prompt('Categoria............: ').toLocaleUpperCase
    
    for (cat in categorias) {
        if(cat in categorias) {
            console.log(`${nomes[cat].padEnd(20)} ${categorias[cat].padEnd(10)} ${igredientes[cat].padEnd(40)} ${precos[cat].padStart(10)}`)
        }
    }

}

function pesquisaPreco(){

}

function cardapioWeb(){

}

function gerarCardapioporCategoria(){

}

function alteracao(){

}

function exclusao(){

}



//---------------------------------- PROGRAMA PRINCIPAL ---------------------------------------

menuPrincipal:
do{
    console.log("-".repeat(50)+'\n🍔 Lancheria Avenida - Controle de Cardápio\n'+"-".repeat(50))
    console.log('1. 📝 Inclusão de Produtos')
    console.log('2. 📋 Listagem de Produtos')
    console.log('3. 🔍 Pesquisa por Categoria')
    console.log('4. 🔎 Pesquisa por Intervalo de Preço')
    console.log('5. 📖 Gerar Cardápio Web')
    console.log('6. 🌐 Gerar Cardápio Web por Categoria')
    console.log('7. 💱 Alterar Preço de Produto')
    console.log('8. ❌ Excluir Produto')
    console.log('9. ↩️ Finalizar')
    const opcao = Number(prompt('\n🔸 Opção: '))
    
    switch (opcao) {
        case 1 : {
            inclusao()
            break
            }
        case 2 : {
            listagem()
            break
            }
        case 3 : {
            pesquisaCategoria()
            break}
        case 4 : {
            pesquisaPreco()
            break
            }
        case 5 : {
            cardapioWeb()
            break
            }
        case 6 : {
            gerarCardapioporCategoria()
            break
            }
        case 7 : {
            alteracao()
            break
            }
        case 8 : {
            exclusao()
            break
            }
        default:{
            break menuPrincipal
        }
    }
} while(true)