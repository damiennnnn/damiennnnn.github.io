const help_cmd = [
    "   info            Outputs the MOTD info",
    "   github          Link to GitHub page",
    "   exit            Closes the window"
];



const info_text = "       __                _                            \n  ____/ /___ _____ ___  (_)__  ____   ____  ____  ___ \n / __  / __ `/ __ `__ \\/ / _ \\/ __ \\ / __ \\/ __ \\/ _ \\\n/ /_/ / /_/ / / / / / / /  __/ / / // /_/ / / / /  __/\n\\__,_/\\__,_/_/ /_/ /_/_/\\___/_/ /_(_)____/_/ /_/\\___/ \n";
const info_desc = [
    "Welcome to damien.one",
    "   * Type 'help' for a list of commands"
];

function printEach(item, index) {
    printStringToOutput(item);
}

function printInfo() {
    var output = document.createElement("PRE");
    output.innerHTML = info_text;
    output.className = "asciiart";
    document.getElementById("terminaloutput").appendChild(output);
    info_desc.forEach(printEach);
}

function printHelp() {
    help_cmd.forEach(printEach);
}

function openGithub() {
    var output = document.createElement('a');
    output.appendChild(document.createTextNode("Click here to go to my GitHub page."));
    output.className = "terminaloutput";
    output.href = "https://github.com/damiennnnn";
    document.getElementById("terminaloutput").appendChild(output);
    document.getElementById("terminaloutput").appendChild(document.createElement("br"));

}

function clearOutput() {
    resetOutputArea();
}

function getCommand(cmd) {
    printStringToOutput("");
    //alert(cmd);
    switch (cmd.toLowerCase()) {
        case "info":
            printInfo();
            break
        case "help":
            printHelp();
            break;
        case "exit":
            window.close();
            break;
        case "clear":
            clearOutput();
            break;
        case "github":
            openGithub();
            break;
        case "test":

            break;
        default:
            printStringToOutput("   Command \"" + cmd + "\" not found.");
            break;
    }
    printStringToOutput("");
};