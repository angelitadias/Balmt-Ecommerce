function addProduto(nome, preco) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ nome, preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${nome} adicionado ao carrinho!`);
    window.location.href = 'checkout.html';

}
