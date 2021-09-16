import get__dirname from '../utils/get__dirname.js'

const expect_url = '/workspace/juln/github-webhooks/__test__'
const calc_url = get__dirname(import.meta.url)
console.log('expect_url: ', expect_url)
console.log('calc_url: ', calc_url)
console.log('valid: ', expect_url === calc_url)