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
}

function openConcierge() {
    window.location.href = 'concierge.html';
}

function openChat() {
    window.location.href = 'chat.html';
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    if (document.title === 'Área do Hóspede') {
        createRooms(9);
    }
});

