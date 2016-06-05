'use strict';

module.exports = function(app) {
  app.route('/')                     //returns an instance of a single route used for http verbs. You use this to avoid duplicate route names. 
    .get(function(req, res) {       //routes http get requests to specified path with specified callback functions.
      var ip = req.headers['x-forwarded-for'] ||    //X-Forwarded-For(XFF)or ['x-forwarded-for'] - HTTP header is the identifier for the originating IP address .
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
     var info = {
         'ip-address': ip,
         'language': req.headers["accept-language"].split(',')[0],
         'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
     };
     res.send(info);
    });
}; 