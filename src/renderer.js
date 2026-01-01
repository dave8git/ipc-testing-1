const sendMessage = document.getElementById('send-message');

sendMessage.addEventListener('click', () =>  window.systemAPI.getSystemInfo());

window.systemAPI.onSystemInfo((info) => {
    alert(`Platform: ${info.platform}, CpuCount: ${info.cpuCount}, Memory: ${info.memory}`)
});