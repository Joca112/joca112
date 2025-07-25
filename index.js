document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector('.card');
  const mensagem = document.querySelector('.mensagem');
  const texto = document.querySelector('.texto');

  card.addEventListener('click', () => {
    mensagem.classList.add('aparecer');

    setTimeout(() => {
      mensagem.scrollIntoView({ behavior: 'smooth' });
    }, 300);

    setTimeout(() => {
      texto.classList.add('aparecer');
    }, 2000);
  });
});
function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.innerHTML = '❤️';

  coracao.style.left = Math.random() * window.innerWidth + 'px';
  coracao.style.fontSize = (10 + Math.random() * 20) + 'px';

  // duração aleatória entre 4 e 8 segundos
  coracao.style.animationDuration = (4 + Math.random() * 4) + 's';

  document.body.appendChild(coracao);

  // Remove o coração depois que a animação termina
  coracao.addEventListener('animationend', () => {
    coracao.remove();
  });
}

// Criar vários corações a cada 300ms
setInterval(criarCoracao, 300);
