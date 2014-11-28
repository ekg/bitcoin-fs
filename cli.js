#!/usr/bin/env node

var bitcoinfs = require('bitcoin-fs')

if (process.argv.length < 4) {
  console.log('usage:', process.argv[0], process.argv[1], '[encode/decode]', '[file]')
  console.log('encodes the data in the file as a series of bitcoin public addresses')
  console.log('or decodes the data in the file from a series of bitcoin public addresses')
  process.exit(1)
}

if (process.argv[2] === 'encode') {
  function printAddresses(addresses) {
    addresses.forEach(function(address) {
      console.log(address)
    })
  }
  bitcoinfs.encode(process.argv[3], printAddresses)
} else if (process.argv[2] === 'decode') {
  function printData(data) {
    process.stdout.write(data)
  }
  bitcoinfs.decode(process.argv[3], printData)
}
