export default event => {
    const { repository, action, issue } = event.payload
    console.log('Received an issue event for %s action=%s: #%d %s',
        repository.name,
        action,
        issue.number,
        issue.title)
}