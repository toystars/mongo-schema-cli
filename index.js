#!/usr/bin/env node
'use strict';

var Program = require('commander'),
  path = require('path'),
  pkg = require(path.join(__dirname, 'package.json')),
  MongoSchemaGen = require('mongo-schema-gen');


Program
  .version(pkg.version)
  .description(pkg.description);

Program
  .command('keys <mongoUrl>')
  .description('List all keys in use in database collection')
  .option('-c, --collection <collectionName>', 'Specify name of collection to fetch keys from')
  .action(function (mongoUrl, options) {
    if (!options.collection) {
      console.log('Collection Name must be supplied...');
    } else {
      console.log('Connecting to Mongo server...');
      MongoSchemaGen.connect(mongoUrl, function (db) {
        MongoSchemaGen.getKeys(options.collection, function (keys) {
          console.log(keys);
          db.close();
        });
      });
    }
  });


Program.parse(process.argv);

