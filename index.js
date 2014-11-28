var fs = require('fs')
var base58check = require('bs58check')
var bitcoin = require('bitcoinjs-lib')
var bitcoinAddress = require('bitcoin-address')
var LineReadableStream = require('line-readable-stream');

function encode(filename, cb) {
  var addresses = new Array
  fs.readFile(filename, function (err, data) {
    if (err) throw err;
    for (var i = 0; i < data.length; i+=20) {
      var buf = new Buffer(21)
      buf[0] = '\x00'            // network version for Bitcoin
      data.copy(buf, 1, i, i+20) // payload--- from our file
      var address = base58check.encode(buf)
      if (!bitcoinAddress.validate(address)) throw new Error('address does not validate ' + address)
      addresses.push(address)
    }
    cb(addresses)
  })
}

function decode(filename, cb) {
  var stream = new LineReadableStream(fs.createReadStream(filename, { flags: "r" }));
  stream.on("line", function(line) {
    // chop off address
    cb(base58check.decode(line).slice(1))
  });
}

module.exports.encode = encode
module.exports.decode = decode
