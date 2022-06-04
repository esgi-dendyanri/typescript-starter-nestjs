var exec = require('child_process').exec;

exec(
    'npm run build & npm run start:prod',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    }
);