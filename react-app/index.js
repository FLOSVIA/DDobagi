var express = require("express");
var app = express();
var url = require("url");
var path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);

app.get("/", function(req, res) {
  var _url = req.url;
  var queryData = url.parse(_url, true).query;

  res.render("index.html", {
    id: queryData.id,
    ps: queryData.password
  });
});

app.listen(3000, function() {
  console.log("running on 3000 port");
});
