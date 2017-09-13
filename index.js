var express=require('express');
var bodyParser=require('body-parser');
var showsController = require('./controllers/shows_controllers.js');


var app = express();

app.use(bodyParser.json());
// could give ^ a path but we don't because we want it to run with every request
app.use(function(req,res,next){
    console.log(req.path);
    console.log(req.query);
    next(); //=> next() makes us able to run code further down on the page
})
function test(req, res, next){
    console.log('puppy');
    next();
}
//    /shows?genre=comedy    =>the query is the stuff after the question mark,
//and the stuff after the question mark is added to an object;
//   ex:  /shows?genre=comedy&rating=9 
//    ^ {genre: 'comedy', rating: '9'} this object is saved to req.query
app.get('/shows', test, showsController.index );
app.get('shows/last', showsController.last);
app.get('/shows/:id', showsController.show );
app.post('/shows', showsController.create );
app.delete('/shows/:id', showsController.destroy);


app.listen(3004, function() {
    console.log('app listening on port 3004');
})

