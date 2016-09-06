
/*!
 * mongo-schema-cli/util
 * Copyright(c) 2016 Mustapha Babatunde Oluwaleke
 * MIT Licensed
 */

'use strict';


var MongoSchemaGen = require('mongo-schema-gen');


module.exports = {


  /**
   * getKeys
   * @summary List all keys in use in database collection
   * @param {String} mongoUrl - mongoDB url
   * @param {String} collectionName
   * @param {Function} callBack - callBack to invoke with result
   */
  getKeys: function (mongoUrl, collectionName, callBack) {
    console.log('Connecting to Mongo server...');
    MongoSchemaGen.connect(mongoUrl, function (db) {
      MongoSchemaGen.getKeys(collectionName, function (keys) {
        callBack(keys);
        db.close();
      });
    });
  },


  /**
   * getSchema
   * @summary Show collection schema
   * @param {String} mongoUrl - mongoDB url
   * @param {String} collectionName
   * @param {Function} callBack - callBack to invoke with result
   */
  getSchema: function (mongoUrl, collectionName, callBack) {
    console.log('Connecting to Mongo server...');
    MongoSchemaGen.connect(mongoUrl, function (db) {
      MongoSchemaGen.getSchema(collectionName, function (schema) {
        callBack(schema);
        db.close();
      });
    });
  },


  /**
   * keyUsed
   * @summary Reports if key is in use in collection or not
   * @param {String} mongoUrl - mongoDB url
   * @param {String} collectionName
   * @param {String} key
   * @param {Function} callBack - callBack to invoke with result
   */
  keyUsed: function (mongoUrl, collectionName, key, callBack) {
    console.log('Connecting to Mongo server...');
    MongoSchemaGen.connect(mongoUrl, function (db) {
      MongoSchemaGen.keyUsed(collectionName, key, function (status) {
        callBack(status);
        db.close();
      });
    });
  },


  /**
   * stats
   * @summary Reports collections stats including collection size, document counts and average document size
   * @param {String} mongoUrl - mongoDB url
   * @param {String} collectionName
   * @param {Function} callBack - callBack to invoke with result
   */
  stats: function (mongoUrl, collectionName, callBack) {
    console.log('Connecting to Mongo server...');
    MongoSchemaGen.connect(mongoUrl, function (db) {
      MongoSchemaGen.stats(collectionName, function (stat) {
        callBack(stat);
        db.close();
      });
    });
  }

};

