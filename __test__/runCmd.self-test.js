import runCmd from '../utils/runCmd.js'

runCmd('echo "hello world"', () => {
    console.log('test pass')
})