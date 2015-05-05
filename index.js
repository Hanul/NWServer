require('./UPPERCASE.JS-COMMON.js');
require('./UPPERCASE.JS-NODE.js');

exports.nodeGlobal = global;

CPU_CLUSTERING(function() {
	console.log('WORK, WORKER!: ', CPU_CLUSTERING.getWorkerId());
});