# bitcoin-fs

Convert files to bitcoin transactions by encoding file data in recipient addresses.

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

## License

MIT
