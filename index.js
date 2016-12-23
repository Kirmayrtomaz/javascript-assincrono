const app = require('express')();
var callback = require("./callback.js")

app.listen(3000, ()=>{
  console.log('API rodando');
})

app.get('/',function(req,res){

  callback.org_github(req,res)


});

setInterval(function () {
    console.log(callback.github)
},4000)
