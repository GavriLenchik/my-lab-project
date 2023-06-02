const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const config = require('./config/db');
const account = require('./routes/account');
const session = require('express-session');
const Book = require('./models/book')


const app = express();

const port = 3000;

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(config.db);

mongoose.connection.on('connected', () =>{
    console.log("Ok")
})

mongoose.connection.on('error', (err) =>{
    console.log("Error: " + err)
});

app.use('/account', account);
let newBook1 = new Book({
    name:"The Midnight Library",
    src:"https://m.media-amazon.com/images/I/41ATfFjhelL._SX329_BO1,204,203,200_.jpg",
    author:"Matt Haig",
    genre:"Science fiction, Fantasy, Philosophical novel",
    year: 2020,
    desc:"Nora Seed feels stuck in her life, bound to the choices she made that she still isn't sure were right. When Nora is ready to leave it all behind, she finds herself in a peculiar library, where each of the infinite books offers a portal to a parallel world, showing her all the many ways her life could have been slightly or drastically different, had she made other decisions.",
    cost: 13.29
  });
let newBook2 = new Book({
    name:"The Invisible Life of Addie LaRue",
    src:"https://m.media-amazon.com/images/I/51FVPBt51ZL.jpg",
    author:"V.E. Schwab",
    genre:"Fantasy, Historical genre, Historical fantasy",
    year: 2020,
    desc:"`The Invisible Life of Addie LaRue` is a genre-bending fantasy book about a young woman named Addie who, in 1714, makes a bargain with a dark god and becomes cursed to be forgotten by everyone she meets. Addie's story spans three centuries and countless countries — until she meets a boy in New York City in 2014 who can finally remember her.",
    cost: 16.19
  });
  let newBook3 = new Book({
    name:"The Seven Husbands of Evelyn Hugo",
    src:"https://m.media-amazon.com/images/I/41x4eg5KyGL.jpg",
    author:"Taylor Jenkins Reid",
    genre:"Romance, Romance, Historical genre",
    year: 2017,
    desc:"Evelyn Hugo was an iconic Hollywood actress, just as notoriously remembered for her seven marriages as she was for her movie performances. Finally ready to tell her story, Evelyn Hugo chooses a little-known journalist named Monique, who goes to Evelyn's luxurious apartment to hear the truth behind Evelyn's lifetime of friendships, ambitions, and many loves.",
    cost: 9.42
  });
  newBook1.save()
  newBook2.save()
  newBook3.save()

app.listen(port, () =>{
    console.log("Server work on "+ port)
})