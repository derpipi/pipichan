// Função para atualizar o status do perfil
function atualizarStatus() {
    const input = document.getElementById('status-input');
    const statusText = document.getElementById('current-status');
    
    if (input.value.trim() !== "") {
        // Atualiza o texto na tela
        statusText.innerHTML = `"${input.value}"`;
        // Limpa o campo de entrada
        input.value = "";
    } else {
        alert("Por favor, digite alguma coisa para atualizar seu status!");
    }
}

// Interações simples dos botões de ação
function enviarMensagem() {
    alert("Caixa de mensagens aberta! (Simulação)");
}

function adicionarAmigo() {
    alert("Solicitação de amizade enviada com sucesso! ★");
}

function compartilhar() {
    alert("Adicionado aos seus favoritos!");
}

function bloquear() {
    const confirmar = confirm("Tem certeza que deseja bloquear este usuário?");
    if (confirmar) {
        alert("Usuário bloqueado.");
    }
}
