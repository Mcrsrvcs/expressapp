const express = require('express')
const path = require("path")
var app = express();
const rout = require(path.join(__dirname+"/routers/blog.js"))
const blogs = require(path.join(__dirname+"/data/blogs.js")) 
const port = process.env.PORT || 3000;
const { engine } = require('express-handlebars');

app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.set("views", "./views");

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname+"static")));
//
app.use('/',rout);

app.listen(port, () => {
  console.log(`blog app listening on port http://localhost:${port}`)
})
