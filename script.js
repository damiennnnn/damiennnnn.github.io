var cmd_history = new Array();

const sh_prompt = "damien.one:~$ ";

function keyupHandler(event) {
    if (event.which == 17)
        ctrlKey = false;
}

function keydownHandler(event) {
    if (event.which == 17)
        ctrlKey = true;
    switch (event.which) {
        case 65:
            if (ctrlKey) event.preventDefault();
            break;
        case 97:
            if (ctrlKey) event.preventDefault();
            break;
        case 8: // backspace
            if (document.getElementById("terminalinput").value.length == sh_prompt.length || ctrlKey)
                event.preventDefault();
            break;
        case 13: // enter
            event.preventDefault();
            //alert(document.getElementById("terminalinput").value);
            handleTerminalCommand(document.getElementById("terminalinput").value);
            clearTerminalInput();
            document.getElementById("terminalinput").value = sh_prompt;
            break;

    }

}

function inputChanged(event) {
    if (document.getElementById("terminalinput").value.length < sh_prompt.length)
        document.getElementById("terminalinput").value = sh_prompt;
};

function printStringToOutput(str) {
    resizeOutputArea(document.getElementById("terminaloutput"));
    document.getElementById("terminaloutput").value += str;
    document.getElementById("terminaloutput").value += "\n";
};


function handleTerminalCommand(input) {
    printStringToOutput(input);
    var cmd = input.replace(sh_prompt, '');
    cmd_history.push(cmd);
    getCommand(cmd);
    document.getElementById("terminalinput").scrollIntoView();
};

function clearTerminalInput() {
    document.getElementById("terminalinput").value = "";
};


function resizeOutputArea(element) {
    element.rows += 1;
};

function inputLostFocus(event) {
    element = document.getElementById("terminalinput");
    end = element.value.length;
    element.setSelectionRange(end, end);
    element.focus();
};

window.onload = function() {
    //alert("onload");
    document.getElementById("terminaloutput").value = "";
    document.getElementById("terminaloutput").value += "\n";
    document.getElementById("terminalinput").value = sh_prompt;

    document.getElementById("terminalinput").addEventListener("keydown", keydownHandler);
    document.getElementById("terminalinput").addEventListener("keyup", keyupHandler);
    document.getElementById("terminalinput").addEventListener("focusout", inputLostFocus);
    document.getElementById("terminalinput").addEventListener("oninput", inputChanged);
};