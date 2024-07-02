import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(express.static("resources"));

const feed = []; 

const createContainer = (title, content) => {
    const formattedContent = content.replace(/\r?\n/g, '<br>');
    return (
        `<div class="container-post">
             <div class="post-option">
                <i class="fa-solid fa-ellipsis option-btn"></i>
                <div class="option-item">
                <li id="delete-btn" class = "delete-btn">Delete</li>
              </div>
                </div>
            <h1>${title}</h1>
            <p>${formattedContent}</p>
        </div>`
    );
};

app.get("/", (req,res) => {
    feed.sort((a, b) => a.index - b.index);
    res.render("home.ejs", {feed});
});

app.get("/home", (req,res) => {
    feed.sort((a, b) => a.index - b.index);
    res.render("home.ejs", {feed});
});

app.get("/post", (req,res) => {
    res.render("post.ejs");
});

app.post("/post", (req,res) => {

    const postHTML = createContainer(req.body["title"], req.body["content"]);
    feed.push(postHTML);
    feed.reverse();
    console.log(req.body);
});


app.listen(port, () => {
    console.log("Listening to port", port);
});