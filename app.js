//pegar o input

//se for sim, mostrar as categorias disponiveis, perguntar qual categoria

//se for não, mostrar todos os livros em ordem crescente pela pag

const livros = require('./database')

const readline = require('readline-sync')

const entradaInicial = readline.question ("Deseja buscar um livro? (S/N):")

if (entradaInicial.toLocaleUpperCase() === "S") {
    console.log("Essas são as categorias disponiveis:")
    console.log("Fantasia","/‎aventura")

    const entradaCategoria = readline.question("Qual categoria deseja:")

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log("Esses são todos os livros disponiveis:")
    console.table(livrosOrdenados)
}