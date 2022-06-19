const fs = require('fs')

const oldPath = './content'
const newPath = './static/content'

fs.rename(oldPath, newPath, function (err) {
  if (err) throw err
  console.log('Successfully renamed - AKA moved!')
})
