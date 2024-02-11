/*

OBJETIVO 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir as uma caixa com os botões de seleção de plataforma:
    PASSO 1 - pegar o botão de seleção de plataformas do JS para poder verificar quando o usuário clicar em cima dele.

    PASSO 2 - pegar o elemento do conteúdo que precisa ser mostrado.

    PASSO 3 - pegar o clipe do usuário no JS.

    PASSO 4- quando o usuário clicar, adicionar a classe ativo na linguagem de plataformas dentro do botão para que o conteúdo apareça.

OBJETIVO 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido:
    PASSO 1 - verificar se o botão já está aberto, se sim, devemos remover a classe ativo para que ele esconda o conteúdo novamente.

*/


const botao = document.querySelector('.btn-plataforma');
const elementoPlataformas = document.querySelector('.btn-plataforma .plataformas');

botao.addEventListener('click', () => {
    elementoPlataformas.classList.toggle('ativo');
});