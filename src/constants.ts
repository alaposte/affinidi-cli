const fs = require('fs')

export const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'))
export const anonymous = 'anonymous'
