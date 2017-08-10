var express = require('express');
var app = require('../app.js')
var http = require('http');
var models = require('../server/models');

app.listen(6840, function() {
  console.log('Server is running on port 6840!');
});
