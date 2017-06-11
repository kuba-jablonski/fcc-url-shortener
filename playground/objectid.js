const {ObjectID} = require('mongodb');

const {mongoose} = require('./../db/mongoose');
const {Url} = require('./../models/url');

let id = new ObjectID();
let hexid = id.toHexString()
let sliced = hexid.slice(-5);

console.log(id, typeof(id));
console.log(hexid, typeof(hexid));
console.log(sliced);


 