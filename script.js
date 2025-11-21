function converter() {
    const valorInput = document.getElementById('valor').value;
    const unidadeOrigem = document.getElementById('unidadeOrigem').value;
    const unidadeDestino = document.getElementById('unidadeDestino').value;

    if (!valorInput) {
        alert('Digite um valor!');
        return;
    }
    const fatores = {
        metro: 1,
        quilometro: 1000,
        milha: 1609.34
    };
    

    const valor = parseFloat(valorInput);

    // Converte origem para metros, depois metros para destino
    const metros = valor * fatores[unidadeOrigem];
    const resultadoFinal = metros / fatores[unidadeDestino];

    document.getElementById('resultado').innerText = resultadoFinal.toFixed(4);

}