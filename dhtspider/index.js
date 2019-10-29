// 'use strict'

// module.exports = require('./lib/spider')

const util = require('util');
const download = require('./common/download.js');

let _infohash = 'd2474e86c95b19b8bcfdb92bc12c9d44667cfa36';
_infohash = _infohash.toUpperCase();
let url = util.format('http://torrage.com/torrent/%s.torrent', _infohash);
console.log(url)

download(url, (err, data) => {
    console.log(err)
    console.log(data);
})
