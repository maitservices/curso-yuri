function calcularContas() {

    var nome = "Murilo";
    var copel = Number(document.querySelector("[name='inputCopel']").value);
    var impostos = 400;
    var aluguel = 600;
    var pensao = 500;
    var prestacaoCarro = 600;
    var cartaoDeCredito = 6900.00;
    var guardarDinheiro = false;

    var dividas = (impostos + aluguel + pensao + prestacaoCarro + cartaoDeCredito);
    var sobra = salario - dividas;

    var contas = [impostos, aluguel, pensao, prestacaoCarro, cartaoDeCredito];

    contas.forEach(itemvalor => {
        console.log("valor da conta :" + itemvalor);

        //se alguma conta for maior que o que vc ganha. deve aparecer um alert mostrando o valor da conta.

    });

    if (dividas < salario) {
        guardarDinheiro = true;
        alert("Uhull :-D vou poupar. Sobrou: " + sobra);
    } else {
        alert("Sobrou: " + sobra + " :-( Não dá para poupar.");
    }

}