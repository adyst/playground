const path = require("path");
const util = require("util");
//or const { log } = require("util");
const v8 = require("v8");
//or const { getHeapStatistics } = require("v8");

const dirUploads = path.join(__dirname, "www", "files", "uploads");

console.log(dirUploads);

util.log(path.basename(__filename));
util.log(" ^ The name of the current file.");

util.log(v8.getHeapStatistics());


