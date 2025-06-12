const prompt = require("prompt-sync")()

const nomes = []
const categorias = []
const igredientes = []
const precos = []
const fotos = []

function inclusao(){

console.log('\n'+'-'.repeat(83)+'\n📝 Inclusão de Produtos no Cardápio')
console.log('-'.repeat(83)+'\n')
const a =        prompt('🍔 Nome do Produto......: ')
const b =        prompt('🛒 Categoria............: ')
const c =        prompt('📑 Igredientes..........: ')
const d = Number(prompt('💵 Preço R$.............: ')).toFixed(2)
const e =        prompt('🖼️ URL da foto..........: ')

// Adicionar nos vetores
nomes.push(a)
categorias.push(b)
igredientes.push(c)
precos.push(d)
fotos.push(e)

console.log(`\n✅ Produto Cadastrado com Sucesso!\n`+`-`.repeat(83))
}

function listagem(){

    console.log('\n'+'-'.repeat(83)+'\n📋 Listagem dos Produtos Cadastrados\n'+'-'.repeat(83))
    console.log(`\nProduto............: Categoria: Igredientes............................: Preço....:\n`)

    for (let i in nomes) {
        console.log(`${nomes[i].padEnd(20)} ${categorias[i].padEnd(10)} ${igredientes[i].padEnd(40)} ${precos[i].padStart(10)}`)
    }
    console.log('\n'+'-'.repeat(83)+'')
}

function pesquisaCategoria(){
    console.log('\n'+'-'.repeat(83)+'\n🔍 Pesquisa por Categoria\n'+'-'.repeat(83))
    
    let categoria = prompt(`Infome a Categoria : `)

    console.log(`\nProduto............: Categoria: Igredientes............................: Preço....:\n`)
    for (i in categorias) {
        if(categorias[i] == categoria) {
            console.log(`${nomes[i].padEnd(20)} ${categorias[i].padEnd(10)} ${igredientes[i].padEnd(40)} ${precos[i].padStart(10)}`)
        }            
    }
        console.log('\n'+'-'.repeat(83)+'')
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
    console.log('\n🍔 LANCHERIA AVENIDA - CONTROLE DE CARDÁPIO\n'+"-".repeat(83)+'\n')
    console.log('1️⃣. 📝 Inclusão de Produtos')
    console.log('2️⃣. 📋 Listagem de Produtos')
    console.log('3️⃣. 🔍 Pesquisa por Categoria')
    console.log('4️⃣. 🔎 Presquisa por Intervalo de Preço')
    console.log('5️⃣. 📖 Gerar Cardápio Web')
    console.log('6️⃣. 🌐 Gerar Cardápio Web por Categoria')
    console.log('7️⃣. 💱 Alterar Preço  de Produto')
    console.log('8️⃣. ❌ Excluir Produto')
    console.log('9️⃣. ↩️ Finalizar')
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