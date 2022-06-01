function submitOnEnter(event) {
    if (event.which === 13) {
        alert(document.getElementById("terminalinput").value);
    }
}
$(document).ready(function() {
    document.getElementById("terminalinput").addEventListener("keypress", submitOnEnter);
});