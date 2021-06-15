const input = document.getElementById('input');

function addingEventListener() {
    alert('Ouch, that hurt!')
    input.addEventListener('click', addingEventListener);
}
addingEventListener();
