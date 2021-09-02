var musicas = [];

function adicionarMusica() {
    musicas.push(document.querySelector("[name='inputMusica']").value);
    document.querySelector("[name='inputMusica']").value = "";
    imprimirNoConsoleDoGoogleChrome();
}

function imprimirNoConsoleDoGoogleChrome() {
    console.log(musicas);
}