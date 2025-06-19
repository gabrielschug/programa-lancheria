const prompt = require("prompt-sync")()
const fs = require("fs") // fs: file system (para manipular aqruivos)

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

    gravaProdutos()

    console.log(`\n✅ Produto Cadastrado com Sucesso!\n`+`-`.repeat(40))
}

function listagem(){

    console.log('\n📋 Listagem dos Produtos Cadastrados\n' + '-'.repeat(40) + '\n\n')
    console.log(`\nProduto............: Categoria: Igredientes............................: Preço....:\n`)

    for (let i in nomes) {
        console.log(`${nomes[i].padEnd(20)} ${categorias[i].padEnd(10)} ${igredientes[i].padEnd(40)} ${precos[i]}`)
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

    if(fs.existsSync('produtos.txt')){  // SE produtos.txt existir ENTÃO...
        
        // Lê as linhas do .txt e fatia e separando as linhas (\n)
        const produtos = fs.readFileSync('produtos.txt','utf-8').split('\n')
        console.log('\n🔍 Pesquisa por Preço\n' + '-'.repeat(40) + '\n\n')
        const min = Number(prompt('Valor Mínimo............: ')).toFixed(2)
        const max = Number(prompt('Valor Máximo............: ')).toFixed(2)
        
            for (i in produtos) {
                const partes = produtos[i].split(';')
                
                nomes.push(partes[0])
                categorias.push(partes[1])
                igredientes.push(partes[2])
                precos.push(Number(partes[3]))
                fotos.push(partes[4])
            }

            for (cat in partes) {
                if(precos[cat] >= min & precos[cat] <= max) {
                    console.log(`${nomes[cat].padEnd(20)} ${categorias[cat].padEnd(10)} ${igredientes[cat].padEnd(40)} ${precos[cat].padStart(8)}`)
                }
            }
        }
}

function cardapioWeb() {
        let conteudo = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cardápio |  Lancheria Avenida</title>
    <style>
        body {  font-family: Arial; margin: 30px; background-color: white;}
        h1 { color: brown; }
        table{width: 100%; border-collapse: collapse; background-color: white; border-bottom: 1px 1px 6px #999; border-radius: 8px; overflow: hidden;}
        th, td {padding: 12px; text-align: left; border-bottom: 1px solid #ccc;}
        th{background-color: #e0dede; color: #333;}
        img{max-width: 100px; max-height: 120px; border-radius:4px;}
        tr:hover {background-color: #f9f9f9;}
    </style>

</head>
<body>
    <h1>🍔 LANCHERIA AVENIDA | Cardápio Online</h1>
    
    <table>
        <thead>

            <tr>
                <th>Produto</th>
                <th>Categoria</th>
                <th>Igredientes</th>
                <th>Preço R$</th>
                <th>Imagem Ilustrativa</th>
            </tr>
        </thead>
        <tbody>
        `
        for (i in nomes) {
            conteudo += `
            <tr>
                <td>${nomes[i]}</td>
                <td>${categorias[i]}</td>
                <td>${igredientes[i]}</td>
                <td>${precos[i].toFixed(2)}</td>
                <td><img src="${fotos[i]}" alt="Foto do Produto"></td>
            </tr>
            `
        }

        conteudo+= `
                </tbody>
            </table>
        </body>
        </html>
        `
        
        fs.writeFileSync('cardapioWeb.html', conteudo)
    
        console.log(`\n✅ Cardápio gerado com sucesso\nAcesse aqui: file:///C:/Users/gabri/Documents/GitHub/programa-lancheria/cardapioWeb.html`)
}

function gerarCardapioporCategoria(){

}

function alteracao(){

}

function exclusao(){

}

function gravaProdutos() {
    const produtos = []

    for (i in nomes) {
        produtos.push(nomes[i]+';'+categorias[i]+';'+igredientes[i]+';'+precos[i]+';'+fotos[i])
    }

    //Salvar dados do Vetor
    fs.writeFileSync("produtos.txt",produtos.join("\n"))
    console.log(`\n✅ Lista Produtos salva com sucesso!`)
}

function obtemProdutos () {
    if(fs.existsSync('produtos.txt')){  // SE produtos.txt existir ENTÃO...
        
        // Lê as linhas do .txt e fatia e separando as linhas (\n)
        const produtos = fs.readFileSync('produtos.txt','utf-8').split('\n')

        // Separa e manda pros vetores
        for (i in produtos) {
            const partes = produtos[i].split(';')

            nomes.push(partes[0])
            categorias.push(partes[1])
            igredientes.push(partes[2])
            precos.push(Number(partes[3]))
            fotos.push(partes[4])
        }
    }
}

// Carregar lista de produtos antes do Menu (se existir arquivo)
obtemProdutos()
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

// Chamar função gravaProdutos(), assim que o programa finalizar
gravaProdutos()