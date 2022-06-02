const help_cmd = [
    "",
    "   info            Outputs the MOTD info",
    "   uname           Prints system information",
    "   clear           Clears the terminal",
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

var browserName = (function(agent) {
    switch (true) {
        case agent.indexOf("edge") > -1:
            return "Edge (EdgeHTML)";
        case agent.indexOf("edg/") > -1:
            return "Edge (Chromium)";
        case agent.indexOf("opr") > -1 && !!window.opr:
            return "Opera";
        case agent.indexOf("chrome") > -1 && !!window.chrome:
            return "Chrome";
        case agent.indexOf("trident") > -1:
            return "IE";
        case agent.indexOf("firefox") > -1:
            return "Firefox";
        case agent.indexOf("safari") > -1:
            return "Safari";
        default:
            return "Other";
    }
})(window.navigator.userAgent.toLowerCase());

function unixName(param) {
    var unixNameOutput = browserName + " ";
    var host = "damien.one";
    var kernelRel = "0.0.1-generic";
    var kernelVer = "Thu Jun 2 16:33:52 BST 2022";
    var machine = "JavaScript";

    switch (param) {
        case "-a":
            unixNameOutput += host + " ";
            unixNameOutput += kernelRel + " ";
            unixNameOutput += kernelVer + " ";
            unixNameOutput += machine + " ";
            break;
        default:
            break;
    }

    printStringToOutput(unixNameOutput);
}

function clearOutput() {
    resetOutputArea();
}

function getCommand(cmd) {
    var split = cmd.split(" ");
    //printStringToOutput(split.length);
    //alert(cmd);
    switch (split[0].toLowerCase()) {
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
        case "uname":
            if (split.length > 1)
                unixName(split[1]);
            else
                unixName("");
            break;
        default:
            printStringToOutput("   Command \"" + cmd + "\" not found.");
            break;
    }
    printStringToOutput("");
};