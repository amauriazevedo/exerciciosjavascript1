const calcular = document.getElementById('calcular');

function balanca () {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    if (numero !== '') {
        const valorHoraMin = numero;
        const parImpar = (numero % 2 == 0) ? "Par" : "Ímpar" 

         resultado.textContent = `O número digitado é:  ${valorHoraMin}, que é: ${parImpar}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', balanca);