var exec = require('child_process').exec;

async function executeCommand(command) {
    return new Promise((resolve, reject) => {
        console.log("COMMAND", command);

        exec(
            command,
            function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }

                resolve();
            }
        );
    })
}

async function main() {
    await executeCommand("npm install")
    await executeCommand("npm run build")

    return require("./dist/main");
}

module.exports = main();