var express=require('express');
var bodyParser=require('body-parser');

var shows = [
    {title: 'Breaking Bad', rating: 9.8},
    {title: 'Parks and Rec', rating: 9.8},
    {title: 'Breaking Bad', rating: 9.8},
];

var app = express();

app.use(bodyParser.json());
// could give ^ a path but we don't because we want it to run with every request

app.get('/shows', function(req, res, next){
    res.status(200).json(shows);
    console.log('endpoint hit');
});

app.post('/shows', function(req, res, next){
    shows.push(req.body);
    res.status(200).json(shows);
})



app.listen(3003, function() {
    console.log('app listening on port 3003');
})

