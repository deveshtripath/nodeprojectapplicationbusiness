const express =require('express');
const path =require('path');
const mongoose=require('mongoose');
const hbs=require("hbs");
const User=require("./models/usermessage");
require("./db/conn")
const app =express();
const port=process.env.PORT || 3000;
DB=`mongodb+srv://project:project@cluster0.anoah.mongodb.net/project?retryWrites=true&w=majority`

mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log(`connectin success`);
}).catch((err)=>console.log(`no connection`));

const staticpath=path.join(__dirname,"../public");
const partialspath=path.join(__dirname,"../templates/partials");
const templatespath=path.join(__dirname,"../templates/views");
app.use(express.static(staticpath));
app.use(express.urlencoded({extended:false}));
app.use('./css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));

app.use('./js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));

app.use('./jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.set("view engine","hbs");

app.set("views",templatespath);
hbs.registerPartials(partialspath);

//routing
app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/contact',(req,res)=>{
    res.render("contact");
})

app.post("/contact",async (req,res)=>{
    try {
        // res.send(req.body);
        // console.log(req.body);

    const userData=new User(req.body);
    await userData.save();
    res.status(201).render("index");

    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})