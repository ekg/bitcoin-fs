# bitcoin-fs

Convert any file to a series of bitcoin addresses.

```
npm install bitcoin-fs
```

## Usage

``` js
var bitcoinfs = require('bitcoin-fs')
bitcoinfs.encode(filename,
  function(addresses) {
    addresses.forEach(function(address) {
      console.log(address)
    }) 
  })

```

Or, from the command-line:

```bash
node cli.js test.txt >out.addresses
```

## Why?

Once data has been converted to a series of valid bitcoin addresses, it can be stored in the blockchain by including the addresses as recipients of transactions.

This is not a cheap way to backup data, but it is perhaps a very persistent one.

## License

MIT
