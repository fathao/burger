var orm = require("../config/orm.js");

var TABLE_NAME = "burger";

var burger = {
  selectAll: function(cb) {
    orm.selectAll(TABLE_NAME, cb);
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne(TABLE_NAME, cols, vals, cb);
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne(TABLE_NAME, objColVals, condition, cb);
  }
};

module.exports = burger;
