'use strict';

module.exports = function(api_keys) {
  return function(req, res, next) {
      if (!options || !api_keys || api_keys.length != 0 && api_keys.indexOf(req.query.api_key) == -1) {
          console.log("Invalid api_key: "+req.query.api_key);
          res.status(401).send({ error: 'Invalid api_key' });
      } else {
        delete req.query.api_key;
        return next();
      }
  };
}
