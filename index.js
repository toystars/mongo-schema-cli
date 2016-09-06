#!/usr/bin/env node


/*!
 * mongo-schema-cli
 * Copyright(c) 2016 Mustapha Babatunde Oluwaleke
 * MIT Licensed
 */

'use strict';

var Program = require('commander'),
  path = require('path'),
  pkg = require(path.join(__dirname, 'package.json')),
  inspector = require('util'),
  Util = require('./util/util');


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
      Util.getKeys(mongoUrl, options.collection, function (keys) {
        console.log(keys);
      });
    }
  });


Program
  .command('schema <mongoUrl>')
  .description('Show collection schema')
  .option('-c, --collection <collectionName>', 'Specify name of collection to display schema')
  .action(function (mongoUrl, options) {
    if (!options.collection) {
      console.log('Collection Name must be supplied...');
    } else {
      Util.getSchema(mongoUrl, options.collection, function (schema) {
        console.log(inspector.inspect(schema, {showHidden: false, depth: null}));
      });
    }
  });


Program
  .command('used <mongoUrl>')
  .description('Reports if key is in use in collection or not')
  .option('-c, --collection <collectionName>', 'Specify name of collection key will be checked against')
  .option('-k, --key <key>', 'Specify which key to check its availability')
  .action(function (mongoUrl, options) {
    if (!options.collection || !options.key) {
      console.log('Collection Name and Key must be supplied...');
    } else {
      Util.keyUsed(mongoUrl, options.collection, options.key, function (boolean) {
        console.log(boolean);
      });
    }
  });


Program
  .command('stats <mongoUrl>')
  .description('Reports collections stats including collection size, document counts and average document size')
  .option('-c, --collection <collectionName>', 'Specify name of collection from which stats will be fetched')
  .action(function (mongoUrl, options) {
    if (!options.collection) {
      console.log('Collection Name must be supplied...');
    } else {
      Util.stats(mongoUrl, options.collection, function (stat) {
        console.log(inspector.inspect(stat, {showHidden: false, depth: null}));
      });
    }
  });


Program.parse(process.argv);

