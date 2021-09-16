import { execFile } from 'child_process'
import get__dirname from '../utils/get__dirname.js'
import path from 'path'

const shellRoot = '../shell/'

export default function runShell(filename, args, callback) {
    const filePath = path.join(
        get__dirname(import.meta.url),
        shellRoot,
        filename + '.sh'
    )
    console.log('run shell: ', filePath)
    execFile(filePath, args, null, (err, stdout, stderr) => {
        if(err) {
            console.log('error: ', err);
        } else {
            console.log(stdout);
            callback && callback()
        }
    })
}