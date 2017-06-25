var Client = require('node-rest-client').Client;
var d3 = require('d3');
var options = {
    mimetypes: {
        json: ["application/json", "application/vnd.metocean.cf+json"]
    }
};
var client=new Client(options);
var selectpicker = require('bootstrap-select');
