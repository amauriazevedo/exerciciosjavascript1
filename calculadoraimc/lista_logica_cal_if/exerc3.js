const calcular = document.getElementById('calcular');

function balanca () {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    if (numero !== '') {
        const total = (numero / 2);
    if (numero & 1) {
      const total = (numero / 2);
      resultado.textContent = `impar`;

    }else (numero & 1) {
       resultado.textContent = `par`;
        
    }

}

calcular.addEventListener('click', balanca);