import runCmd from '../../utils/runCmd.js'

export default event => {
    const { repository, ref } = event.payload
    const target = repository.name
    // repository.ssh_url
    // repository.clone_url
    console.log(`Received a push event for ${target} to ${ref}`)
    if(ref === 'refs/heads/master') {
        console.log('\n========clone github仓库\n')
        runCmd('cd / git clone ')
        console.log('\n========docker build\n')
        
        console.log('\n========docker run\n')
        
        
    }
}