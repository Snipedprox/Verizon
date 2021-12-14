const fs = require("fs");
const {resolve} = require("path");

module.exports = (client, path) => {
 const PATH = resolve(path) + "/";
 fs.readdir(PATH, (e, f) => {
 if(e) throw e;
 else f.filter(x => x.endsWith(".js"))
 .forEach(file => client.functionManager.createCustomFunction(require(/server.js)));
 })
}