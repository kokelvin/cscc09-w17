var express = require('express')
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.text({type:"*/*"}));

var Message = (function(){
    var id = 0;
    return function Message(content){
        this.id = id++;
        this.content = content;
    }
}());

app.use(function (req, res, next){
    console.log("HTTP request", req.method, req.url, req.body);
    next();
});

var messages = [];

app.post('/api/messages/', function (req, res, next) {
    var message = new Message(req.body);
    messages.push(message);
    res.end(message.id.toString());
    next();
});

app.get('/api/messages/:id/', function (req, res, next) {
    res.send(messages.find(function(e){
        return (e.id === parseInt(req.params.id));
    }).content);
    next();
});

app.delete('/api/messages/:id/', function (req, res, next) {
    messages = messages.filter(function(e){
        return(e.id !== parseInt(req.params.id));
    });
    res.end("success");
    next();
});

app.use(function (req, res, next){
    console.log("DB", messages);
    console.log("HTTP Response", res.statusCode);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});