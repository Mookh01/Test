'use strict';

module.exports = function(app) { 
                     //returns an instance of a single route used for http verbs. You use this to avoid duplicate route names. 
   app.get("/", function(req, res) {       //routes http get requests to specified path with specified callback functions.
      var ip = req.headers['x-forwarded-for'] ||    //X-Forwarded-For(XFF)or ['x-forwarded-for'] - HTTP header is the identifier for the originating IP address .
     req.connection.remoteAddress ||  //this grabs the ip address of the user.
     req.socket.remoteAddress ||    
     req.connection.socket.remoteAddress;
     
     var header = {
         'ip-address': ip,
         'language': req.headers["accept-language"].split(',')[0],
         'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
     };
     res.send(header);
    });    
}; 