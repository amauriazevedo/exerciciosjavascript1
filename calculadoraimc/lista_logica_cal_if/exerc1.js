const calcular = document.getElementById('calcular');

function balanca () {
    const tara = document.getElementById('tara').value;
    const peso = document.getElementById('peso').value;
    const valorkg = document.getElementById('valorkg').value;
    const resultado = document.getElementById('resultado');

    if (tara !== '' && peso !== '' && valorkg !== '') {
        const valorPesograma = (valorkg / 100);
        const valorPesoFinal = (peso - tara);
        const valorFinal = (valorPesograma * valorPesoFinal/10).toFixed(0);

         resultado.textContent = `O valor a pagar é R$: ${valorFinal}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', balanca);