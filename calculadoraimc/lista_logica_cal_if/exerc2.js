const calcular = document.getElementById('calcular');

function balanca () {
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');

    if (tempo !== '') {
        const valorHoraMin = (tempo * 60);
        const valorTempoMin = (valorHoraMin / 15).toFixed(0);
        const valorFinal = (tempo/10).toFixed(0);

         resultado.textContent = `O tempo de uso é:  ${valorHoraMin} minutos,  e o valor a ser pago é R$: ${valorTempoMin}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', balanca);