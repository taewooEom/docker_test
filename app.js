var express = require('express');
var app = express();

app.get(['/', '/index.html'], function (req, res) {
	res.send('Hello Test');
});

app.listen(80);
