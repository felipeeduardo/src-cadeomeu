var express = require('express');
var secure = require('express-force-https');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 3800));
app.use(secure);
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html')
});

var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log(' Server running... in ' + port);
})
