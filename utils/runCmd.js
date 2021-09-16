import { exec } from 'child_process'

export default function runCmd(cmdStr, callback) {
    exec(cmdStr, function(err, stdout, stderr){
        if(err) {
            console.log('error: ', stderr);
        } else {
            console.log(stdout);
            callback && callback()
        }
    })
}