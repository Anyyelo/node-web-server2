const express=require('express');
require('dotenv').config();
const hbs=require('hbs');
const app = express();
const port=process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials',function(err){});

//servidor estatico con express
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home',{
        nombre:'An',
        apellido:'H',
        titulo:'Curso de node'
    });
})

app.get('/elements',(req,res)=>{
    res.render('elements');
})

app.get('/generic',(req,res)=>{
    res.render('generic');
})

app.listen(port);
