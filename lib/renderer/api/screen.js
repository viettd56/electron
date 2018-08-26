'use strict'

const { deprecate, remote } = require('electron')

deprecate.warn('electron.screen', 'electron.remote.screen')

if (remote) {
  module.exports = remote.screen
} else {
  throw new Error('screen requires remote, which is not enabled')
}
