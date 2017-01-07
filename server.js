/**
 * Created by george on 24.12.2016.
 */
var express = require('express');
var app  = express();
app.use(express.static('public'));
app.listen(3000, function () {
    console.log('Express server is up on port 3000');
});