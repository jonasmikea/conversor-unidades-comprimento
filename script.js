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
}