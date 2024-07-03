import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static("resources"));

const feed = [];
app.get("/", (req, res) => {
    res.render("home.ejs", { feed });
});
app.get("/home", (req, res) => {
    res.render("home.ejs", { feed });
});

app.get("/post", (req, res) => {
    res.render("post.ejs");
});
app.post("/post", (req, res) => {
    const newPost = {
        title: req.body.title,
        description: req.body.content.replace(/\r?\n/g, '<br>') 
    };
    feed.unshift(newPost); 
    console.log(req.body);
    res.redirect("/home");
});

app.post("/delete", (req, res) => {
    const index = parseInt(req.body.index, 10);
    feed.pop(index, 1); 
    res.redirect("/home");
});

app.listen(port, () => {
    console.log("Listening to port", port);
});
