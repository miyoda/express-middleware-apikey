[![Build Status](https://travis-ci.org/miyoda/express-middleware-apikey.svg?branch=master)](https://travis-ci.org/miyoda/express-middleware-apikey)
[![Dependency Status](https://david-dm.org/miyoda/express-middleware-apikey.svg)](https://david-dm.org/miyoda/express-middleware-apikey)
[![devDependency Status](https://david-dm.org/miyoda/express-middleware-apikey/dev-status.svg)](https://david-dm.org/miyoda/express-middleware-apikey#info=devDependencies)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)   
Middleware 4 verify api_key in express
==============================================================

# Install
Execute:
> npm install --save express-middleware-apikey


# Use example
Before your express methods
```
  var expressMiddlewareApikey = require('express-middleware-apikey');
  app.use(expressMiddlewareApikey(options.api_keys));
```
