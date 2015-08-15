require('./UPPERCASE.JS-COMMON.js');
require('./UPPERCASE.JS-NODE.js');

exports.nodeGlobal = global;

WEB_SERVER(8123, function(requestInfo, response, onDisconnected) {
	response('test');
});