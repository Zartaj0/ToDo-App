var bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://zartaj:zartaj@cluster0.2isjv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
 var todoschema = new mongoose.Schema({
  item:String
});
var Todo = mongoose.model('Todo', todoschema);

var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function (app ) {
app.get('/todo', function (req,res) {
  Todo.find({},function (err,data) {
    if(err) throw err;
      res.render('todo',{todos:data,})
  })

})

app.post('/todo' , urlencodedParser,function (req,res) {
  var newTodo = Todo(req.body).save(function (err,data) {
    if (err) throw err;
    res.json(data);

  })
})

app.delete('/todo/:item', function(req,res){
  Todo.find({item: req.params.item.replace(/\-/g , " ")}).deleteOne(function(err,data){
    if (err) throw err;
    res.json(data);
});
});


}
