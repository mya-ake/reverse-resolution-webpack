'use strict'

const express = require('express')

const port = 3000
const app = express()

app.use('/assets/', express.static('dist/assets', {
  index: false,
}))
app.use('*', express.static('dist', {
  index: 'index.html',
}))

const server = app.listen(port, () => {
  console.log(`listening: http://localhost:${port}`);
});

module.exports = {
  close: () => {
    server.close()
  },
}
