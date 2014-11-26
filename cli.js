#!/usr/bin/env node

var bitcoinfs = require('bitcoin-fs')

if (process.argv.length < 3) {
  console.log('usage:', process.argv[0], process.argv[1], '[file]')
  console.log('encodes the data in the file as a series of bitcoin public addresses')
  process.exit(1)
}

bitcoinfs.encode(process.argv[2],
       function(addresses) {
         //console.log(addresses.length)
         addresses.forEach(function(address) {
           console.log(address)
         })
       })
