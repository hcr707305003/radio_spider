const download = require('download');
const fs = require('fs');
module.exports = function(url,fileName,file='radio'){
	download(url).then(data => {
	    fs.writeFileSync(file+'/'+fileName, data);
	    console.log('success');
	});
}