# mongo-schema-cli 

[![npm](https://img.shields.io/npm/v/mongo-schema-cli.svg)](https://www.npmjs.com/package/mongo-schema-cli) [![Downloads](https://img.shields.io/npm/dt/mongo-schema-cli.svg)](https://www.npmjs.com/package/mongo-schema-cli) [![Licence](https://img.shields.io/npm/l/mongo-schema-cli.svg)](https://www.npmjs.com/package/mongo-schema-cli)

Utility command line tool for MongoDB collections queries. Based on [mongo-schema-gen](https://github.com/toystars/mongo-schema-gen)

![schema](https://cloud.githubusercontent.com/assets/16062709/18309749/c612210c-74f2-11e6-823f-bd736341b0b4.png)
![keys](https://cloud.githubusercontent.com/assets/16062709/18309748/c5eeca4a-74f2-11e6-8e10-91c226831df3.png)


## Installation

``` bash
$ npm install -g mongo-schema-cli
```


## Docs

     Usage: mongogen [options] [command]
    
    
      Commands:
    
        keys [options] <mongoUrl>    List all keys in use in database collection
        schema [options] <mongoUrl>  Show collection schema
        used [options] <mongoUrl>    Reports if key is in use in collection or not
        stats [options] <mongoUrl>   Reports collections stats including collection size, document counts and average document size
    
    
      Options:
    
        -h, --help     output usage information
        -V, --version  output the version number


## Usage
There are four commands available: `mongogen keys`, `mongogen schema`, `mongogen used` and `mongogen stats`.

#### keys command
`$ mongogen keys mongodb://localhost:27017/sample -c users`

Prints an array of all the keys used in `users` collection

#### schema command
`$ mongogen schema mongodb://localhost:27017/sample -c users`

Prints a schema for `users` collection based on the data types of documents stored.

#### used command
`$ mongogen used mongodb://localhost:27017/sample -c users -k name`

Prints a boolean - `true` if key `name` is used in `users` collection, `false` if otherwise

#### stats command
`$ mongogen stats mongodb://localhost:27017/sample -c users`

Prints a JSON containing basic information about collection.



## Contributing

Please feel free to fork this package and contribute by submitting a pull request to add more features or fix bugs.
[Read more on contributing](./CONTRIBUTING.md).


## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or HackerNews? Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/iAmToystars)!

Thanks!
Mustapha Babatunde Oluwaleke.



## License

The source code is open-sourced software licensed under the [MIT License](http://opensource.org/licenses/MIT).

