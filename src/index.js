const express = require("express");
const path = require("path");

const indexRouter = require("./router/indexRouter");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(indexRouter);

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000);
