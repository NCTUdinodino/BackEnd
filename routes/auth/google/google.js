var express = require('express');
var methods  = require('./methods');

var router = express.Router();
var url = methods.method.url;
var getCode = methods.method.getCode;
var getToken = methods.method.getToken;
var getEmail = methods.method.getEmail;
var redirectPath = methods.method.redirectPath;

router.get('/auth/Google', function(req,res) {
    res.redirect(url);
});

router.get('/auth/Google/callback', getCode, getToken, getEmail, redirectPath); 

module.exports = router;
