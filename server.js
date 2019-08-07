const express = require("express");
const routes = require("./controllers");
const app = express();
const PORT = process.env.PORT || 3001;
<<<<<<< HEAD
// var db = require("./models"); - not being used right now. need to comment this back in later.
///////////////////////////////////////////////////////////
//For scraping the news 
const cheerio = require('cheerio')
const axios = require('axios')

axios.get('https://sports.yahoo.com/nfl/').then((response) => {
  const $ = cheerio.load(response.data)
  //THIS SELECTOR NEEDS TO BE TWEAKED THIS IS JUST THE BASED CODE
  const urlElems = $('li')
    
  for (let i = 0; i < urlElems.length; i++) {
    const urlSpan = $(urlElems[i]).find('a')[0]

    if (urlSpan) {
      const urlText = $(urlSpan).text()
      // We then print the text on to the console
      console.log(urlText)
    }
    else(console.log("Didn't work"))
  }
})
///////////////////////////////////////////////////////////////
=======
var db = require("./models");
>>>>>>> 2be5aeed51132d75d16292ac4b4a56ba4953d3b2

// Defining middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serving up static assets on Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Adding routes
app.use(routes);

// Connecting to the DB and starting the server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
<<<<<<< HEAD
// }); - DB is not being used right now. need to comment this back in later.

=======
});
>>>>>>> 2be5aeed51132d75d16292ac4b4a56ba4953d3b2
