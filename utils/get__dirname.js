/**
 * @params {} url: import.meta.url
 */
export default function get__dirname(url) {
    const index = url.lastIndexOf('/') // 斜杠索引
    const dirnameWithprotol = url.slice(0, index) // 如 file:///workspace
    const __dirname = dirnameWithprotol.split('file://')[1]
    return __dirname
}