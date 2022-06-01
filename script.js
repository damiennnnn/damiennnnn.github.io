function submitOnEnter(event) {
    alert("hello");
    if (event.which === 13) {
        alert(document.getElementById("terminalinput").value);
    }
}

window.onload = function() {
    document.getElementById("terminalinput").addEventListener("keypress", submitOnEnter);
};