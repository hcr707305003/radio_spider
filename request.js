var request = require('request');
var iconv = require('iconv-lite');

module.exports = function(url, method, encoding, callback) {
  request({
    url: url,
    method: method,
    encoding: null,
    // proxy: 'http://127.0.0.1:1087',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
    }
  }, function(err, res, body) {
    body = iconv.decode(body, encoding);
    if (err) {
      console.log(err);
    } else {
      callback(body);
    }
  })
}