var cmd_history = new Array();

const sh_prompt = "";
const prompt = "damien.one:~$ ";

function keyupHandler(event) {
    if (event.which == 17)
        ctrlKey = false;
};

function keydownHandler(event) {
    document.getElementById("terminalinput").size = Math.max(0, document.getElementById("terminalinput").value.length);
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
            if (ctrlKey)
                event.preventDefault();
            break;
        case 13: // enter
            event.preventDefault();
            //alert(document.getElementById("terminalinput").value);
            handleTerminalCommand(document.getElementById("terminalinput").value);
            clearTerminalInput();
            document.getElementById("terminalinput").value = sh_prompt;
            document.getElementById("terminalinput").size = Math.max(1, document.getElementById("terminalinput").value.length);
            break;

    }
};

function inputChanged(event) {
    if (document.getElementById("terminalinput").value.length < sh_prompt.length)
        document.getElementById("terminalinput").value = sh_prompt;
};

function openInNewTab(url) {}

function printStringToOutput(str) {
    var output = document.createElement("SPAN");
    output.appendChild(document.createTextNode(str));
    output.className = "terminaloutput";
    document.getElementById("terminaloutput").appendChild(output);
    document.getElementById("terminaloutput").appendChild(document.createElement("br"));
    //resizeOutputArea(document.getElementById("terminaloutput"));
    //document.getElementById("terminaloutput").value += str;
    //document.getElementById("terminaloutput").value += "\n";
};

function printBashPrompt() {
    var output = document.createElement("SPAN");
    output.appendChild(document.createTextNode(prompt));
    output.className = "terminalprompt";
    document.getElementById("terminaloutput").appendChild(output);
}

function handleTerminalCommand(input) {
    printBashPrompt();
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

function resetOutputArea() {
    document.getElementById("terminaloutput").replaceChildren();
};

function inputLostFocus(event) {
    event.preventDefault();
    element = document.getElementById("terminalinput");
    end = element.value.length;
    element.setSelectionRange(end, end);
    element.focus();
};

window.onload = function() {
    //alert("onload");
    resetOutputArea();
    document.getElementById("terminalinput").size = Math.max(1, document.getElementById("terminalinput").value.length);

    document.getElementById("terminalinput").focus();
    document.getElementById("terminalinput").addEventListener("keydown", keydownHandler);
    document.getElementById("terminalinput").addEventListener("keyup", keyupHandler);
    document.getElementById("terminalinput").addEventListener("onblur", inputLostFocus);
    document.getElementById("terminalinput").addEventListener("oninput", inputChanged);

    getCommand("info");
};