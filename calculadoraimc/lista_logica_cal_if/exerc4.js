const calcular = document.getElementById('calcular');

function balanca () {
    const nome = document.getElementById('nome').value;
    const Preco= document.getElementById('Preco').value;
    const resultado = document.getElementById('resultado');
    
    if (nome !== '') {
        const NomeMedi = nome;
        promocao = (Preco*2)-(0.40*Preco);
        resultado.textContent = `O nome do médicamento é:  ${NomeMedi}, o valor total da compra é R$: ${promocao }, foi dado um desconto de 40% na segunda unidade.`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', balanca);