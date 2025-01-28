let selectedRoom = null;

function createRooms(numRooms) {
    const container = document.getElementById('roomContainer');
    container.innerHTML = ''; // Limpa o container antes de adicionar os quartos
    for (let i = 1; i <= numRooms; i++) {
        const room = document.createElement('div');
        room.className = 'room';
        room.innerHTML = `
            <div class="room-icon"><i class="fas fa-bed"></i></div>
            <div class="room-number">${i}</div>
        `;
        room.addEventListener('click', () => selectRoom(i));
        container.appendChild(room);
    }
}

function selectRoom(roomNumber) {
    selectedRoom = roomNumber;
    document.getElementById('selectedRoom').textContent = roomNumber;
    document.getElementById('servicePanel').style.display = 'block';
    playNotificationSound(); // Chama a função de notificação sonora
}

function requestService(service) {
    if (!selectedRoom) {
        alert('Por favor, selecione um quarto primeiro.');
        return;
    }
    
    const serviceNames = {
        toalha: 'Pedir Toalha',
        quarto: 'Serviço de Quarto',
        manutencao: 'Pedir Manutenção',
        ar: 'Problemas com Ar-condicionado',
        camareira: 'Solicitar Camareira',
        checkout: 'Fazer Checkout'
    };

    alert(`Serviço "${serviceNames[service]}" solicitado para o Quarto ${selectedRoom}.`);
    playNotificationSound(); // Chama a função de notificação sonora
}

function openConcierge() {
    window.location.href = 'concierge.html';
}

function openChat() {
    window.location.href = 'chat.html';
}

function playNotificationSound() {
    const audio = new Audio('notification.mp3'); // Certifique-se de que o arquivo notification.mp3 está na raiz do repositório
    audio.play();
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    if (document.title === 'Área do Hóspede') {
        createRooms(9);
    } else if (document.title === 'Painel do Administrador') {
        updateAdminPanel();
        createRooms(9);
    }
});
