'use strict'

const { deprecate, remote } = require('electron')

module.exports = function (name) {
  deprecate.warn(`require('${name}')`, `remote.require('${name}')`)
  if (remote) {
    return remote.require(name)
  } else {
    throw new Error(`${name} requires remote, which is not enabled`)
  }
}
