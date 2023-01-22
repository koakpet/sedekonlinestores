const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const _ = require("lodash");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const products = [
    {
        product: "2-Panel Molded Doors",
        image: "2-panel.jpg",
        price: "",
    },
    {
        product: "Oval Panel Molded Doors",
        image: "3-panel.jpg",
        price: "",
    },
    {
        product: "4-Panel Molded Doors",
        image: "4-panel.jpg",
        price: "",
    },
    {
        product: "5-Panel Molded Doors",
        image: "5-panel.jpg",
        price: "",
    },
    {
        product: "6-Panel Molded Doors",
        image: "6-panel.jpg",
        price: "",
    },
]

const about = [
    {
        title: "Who we are.",
        content: "Sedek Doors and Cabinets is a brand committed to producing quality finished wood doors and cabinets at affordable prices. Our standard range of products includes various designs of doors and cabinets in diverse dimensions and textures, all to meet the varying requirements of our esteemed customers.",
        link: "/about"
    },
    {
        title: "The Title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus turpis eu diam laoreet, vel eleifend quam tempus. Aliquam id mi eleifend, varius lacus et, auctor massa. Donec hendrerit ornare nibh, sed venenatis nunc laoreet a. Maecenas in quam suscipit, auctor magna at, dignissim nisl. Nunc pretium tempus pharetra. Mauris fringilla lorem in lacus rutrum gravida. Phasellus placerat, tellus eget molestie imperdiet, odio mi tristique velit, vel faucibus ligula sapien eget massa.",
        link:"#"
    },
    {
        title: "Molded Panel Doors",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus turpis eu diam laoreet, vel eleifend quam tempus. Aliquam id mi eleifend, varius lacus et, auctor massa. Donec hendrerit ornare nibh, sed venenatis nunc laoreet a. Maecenas in quam suscipit, auctor magna at, dignissim nisl. Nunc pretium tempus pharetra. Mauris fringilla lorem in lacus rutrum gravida. Phasellus placerat, tellus eget molestie imperdiet, odio mi tristique velit, vel faucibus ligula sapien eget massa."
    },
    {
        title: "Flush Doors",
        content: "<p>Suspendisse eget nunc non odio auctor hendrerit. Integer vitae ipsum nec dolor convallis tristique. Ut luctus mauris magna, sed finibus velit mattis rhoncus. Nam nulla tellus, tempus vitae leo ornare, eleifend sollicitudin ante. Pellentesque consectetur, tortor sed ornare tincidunt, risus lorem convallis dui, non viverra tellus ipsum vel eros. Suspendisse rhoncus ante vel purus commodo consectetur. Suspendisse imperdiet semper justo. Nullam sed dolor pharetra, faucibus massa eu, dignissim libero. Aenean sed vehicula tellus. Quisque eu diam sed ipsum pellentesque vestibulum. Suspendisse congue quis mauris et cursus.</p>",
    },
    {
        title: "Cabinets",
        content: "<p>Quisque dignissim gravida quam, sit amet lacinia orci. Suspendisse potenti. Donec sollicitudin ipsum consequat nulla blandit, at luctus erat viverra. Nulla tincidunt lacus nec sem bibendum mollis. Integer ornare commodo luctus. Suspendisse rhoncus est quis diam laoreet, non placerat arcu accumsan.</p>"
    }
];



app.get("/", function(req, res){
    res.render("index", {
        introTitle: about[0].title,
        introText: about[0].content,
        link: about[0].link,
        products: products
    });
});

app.get("/about", function(req, res){
    res.render("about", {
        introTitle: about[1].title,
        introText: about[1].content,
        link: about[1].link
    });
});

app.get("/product", function(req, res){
    res.render("product", {
        introTitle: about[0].title,
        introText: about[0].content,
        link: about[0].link,
    });
});


app.listen(process.env.PORT || 3000, function(req, res){
    console.log("Server running on PORT: 3000")
});
