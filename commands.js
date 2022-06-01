const help_cmd = [
    "   test       Hello",
    "   binley     Binley Mega Chippy"
];

function printEach(item, index) {
    printStringToOutput(item);
}

function printHelp() {
    help_cmd.forEach(printEach);
}

function getCommand(cmd) {
    printStringToOutput("");
    //alert(cmd);
    switch (cmd.toLowerCase()) {
        case "help":
            printHelp();
            break;
        case "exit":
            window.close();
            break;
        default:
            printStringToOutput("   Command " + cmd + " not found.");
            break;
    }
    printStringToOutput("");
};