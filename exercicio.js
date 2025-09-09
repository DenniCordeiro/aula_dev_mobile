const filmes = [
    { id: 1, titulo: "Matrix", ano: 1999, nota: 8.7, genero: "Ficção Científica" },
    { id: 2, titulo: "O Poderoso Chefão", ano: 1972, nota: 9.2, genero: "Drama" },
    { id: 3, titulo: "A Origem", ano: 2010, nota: 8.8, genero: "Ficção Científica" },
    { id: 4, titulo: "O Senhor dos Anéis: O Retorno do Rei", ano: 2003, nota: 9.0, genero: "Fantasia" },
    { id: 5, titulo: "Pulp Fiction", ano: 1994, nota: 8.9, genero: "Crime" },
    ];

//EXERCÍCIO 1
/*const NOME_DO_CATALOGO = "CineTech"
let totalDeFilmes = filmes.length
console.log(NOME_DO_CATALOGO +" "+ totalDeFilmes)*/

//EXERCÍCIO 2
/*function classificarNota(filme) {
    if (filme >= 9) {
        return "Excelente";
    } else if (filme >= 8 && filme < 9) {
        return "Muito Bom";
    } else {
        return "Bom";
    }
}
filmes.forEach((filme) => {
        filme.classificacao = classificarNota(filme);
});
console.log(filmes);*/

//EXERCÍCIO 3
/*
const criarResumoFilme = ({ titulo, ano, nota }) => {
    return `[${titulo}] (${ano}) - Nota: ${nota}`;
};
filmes.forEach((filme) => {
    console.log(criarResumoFilme(filme));
}) */     

//EXERCICIO 4 
/*const filmesClassicos = filmes.filter((filme) => filme.ano < 2000);
console.log(filmesClassicos);*/

//EXERCICIO 5
/*const titulosFilmes = filmes.maps((filmes) => filmes.titulo);
console.log(titulosFimes);*/

//EXERCICIO 6
/*const ficcaoCientificaExcelentes = filmes
    .map(filme => ({
        ...filme,
        genero: filme.genero.toLowerCase()
    }))
    .filter(filme => 
        filme.genero === "ficção científica" && filme.nota >= 8.5
    );

console.log(ficcaoCientificaExcelentes)*/

//EXERCICIO 7
/*const titulodrama = filmes
    .map(filme => ({
        ...filme,
        genero: filme.genero.toLowerCase()
    }))
    .filter(filme => 
        filme.genero === "drama" && filme.nota >= 8.5
    );

console.log(titulodrama);*/

//EXERCICIO 8
/*function existeFilmeDoGenero(genero) {
    let resultado = filmes.filter(filme => filme.genero.toLowerCase() === genero.toLowerCase());
    return resultado > 0 ? true : false;
}
console.log(existeFilmeDoGenero("Drama"));*/

//EXERCICIO 9
/*function buscarEnderecoPorCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => console.log(data));
}
buscarEnderecoPorCEP("88137082");
*/
//EXERCICIO 10
function encontrarFilmePorId(id) {
    const filmesEncontrados = filmes.filter(filme => filme.id === id);
    return filmesEncontrados[0];
}
console.log(encontrarFilmePorId(3));