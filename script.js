const btnTema = document.getElementById('btn-tema');

// 1. Ao carregar qualquer página, verifica se o modo escuro foi ativado anteriormente
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// 2. Evento de clique no botão
if (btnTema) { // Verifica se o botão existe na página antes de adicionar o evento
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Se a classe foi adicionada, salvamos no localStorage. Se removida, apagamos.
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.removeItem('dark-mode');
        }
    });
}

// Seleciona o formulário e o elemento de status
const form = document.getElementById('formulario-contato');
const statusEnvio = document.getElementById('status-envio');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio real (recarregar a página)

        // Captura os valores
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validação básica (Regex para formato de e-mail)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nome === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
        } else if (!emailRegex.test(email)) {
            alert("Por favor, insira um e-mail válido (ex: usuario@dominio.com).");
        } else {
            // Simulação de envio com sucesso
            statusEnvio.innerText = "Mensagem enviada com sucesso!";
            statusEnvio.style.color = "green";
            
            // Limpa os campos do formulário após envio simulado
            form.reset();

            // Opcional: remove a mensagem após 5 segundos
            setTimeout(() => {
                statusEnvio.innerText = "";
            }, 5000);
        }
    });
}

// Interação de Esconder/Mostrar conteúdo
const btnLeiaMais = document.getElementById('btn-leia-mais');
const conteudoExtra = document.getElementById('conteudo-extra');

if (btnLeiaMais) {
    btnLeiaMais.addEventListener('click', () => {
        // Verifica se o conteúdo está escondido
        if (conteudoExtra.style.display === 'none') {
            conteudoExtra.style.display = 'block';
            btnLeiaMais.innerText = 'Leia menos';
        } else {
            conteudoExtra.style.display = 'none';
            btnLeiaMais.innerText = 'Leia mais';
        }
    });
}