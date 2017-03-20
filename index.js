//    Copyright 2017 Satyam Singh
// 
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
// 
//        http://www.apache.org/licenses/LICENSE-2.0
// 
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

'use strict';

var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

var port  = 9090;

app.engine('hbs', exphbs({defaultLayout: 'main',extname:'.hbs'}));
app.set('view engine', 'hbs');


app.use('/', express.static('static'));



app.get('/', function (req, res) {
    res.render('home');

});
app.get('/about', function (req, res) {
    res.render('about');

});

app.get('/view3',function(req,res){
   res.render('view3');
})
app.get('/view4',function(req,res){
   res.render('view4');
})
app.get('/view5',function(req,res){
   res.render('view5');
})
app.get('/view6',function(req,res){
   res.render('view6');
})
app.get('/offline',function(req,res){
   res.render('offline');
})



app.listen(port,function(){
    console.log('app at port:- ' +port);
})