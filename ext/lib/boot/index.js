const express = require('express')

const app = express()

require('ext/lib/translations')
require('ext/lib/notifier')
app.use('/api/v2', require('ext/lib/comments'))

module.exports = app
