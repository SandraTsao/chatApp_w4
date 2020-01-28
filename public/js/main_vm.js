// imports always go first - if we're importing anything

const socket = io();

function setUserId(packet) {
    debugger;
    console.log(packet);
}

function runDisconnectMessage(packet) {
    debugger;
    console.log(packet);
}

socket.addEventListener('connected', setUserId);
socket.addEventListener('user_disconnect', runDisconnectMessage);