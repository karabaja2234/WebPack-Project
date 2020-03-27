require("!style-loader!css-loader!./style.css");
let $ = require("jquery");

let main = $("<div id='main'></div>").appendTo("body");
$("<div class='list-container'></div>").appendTo(main);
$("<div class='main-container'></div>").appendTo(main);

let list = $("<ul class='list'></ul>");
$(".list-container").append(list);
$("<li class='list-item'>" + "Biography" + "</li>").appendTo(list);
$("<li class='list-item'>" + "Projects" + "</li>").appendTo(list);
$("<li class='list-item'>" + "Facebook" + "</li>").appendTo(list);
$("<li class='list-item'>" + "Instagram" + "</li>").appendTo(list);

let heading = $(
  "<h1 class='main-heading'>" + "Welcome to my WebPack project!" + "</h1>"
);
$(".main-container").append(heading);
let text = $("<p class='text'>" + "Hello, my name is Selman Patkovic" + "</p>");
$(".main-container").append(text);
let button = $("<button class='btn'>" + "Click me" + "</button>");
$(".main-container").append(button);

$(".btn").on("click", function() {
  alert("Have a nice day!");
});
