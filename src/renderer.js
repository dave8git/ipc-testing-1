const sendMessage = document.getElementById('send-message');

sendMessage.addEventListener('click', () => {
    console.log('dupa')
    window.systemAPI.sendMessage('How are you main?')
});

window.systemAPI.onMessage((data) => alert(data))