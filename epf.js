// Declaring app dependencies
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const server = express();
const root_links = require("./page_links");
const client_area_links = require("./page_links/dashboard");
const admin_area_links = require("./page_links/power_house");


// Making necessary setup
server.set("view engine", "ejs");
server.set("views", __dirname + "/pages");
server.set("layout", "layouts/layout");
server.use(expressLayout);
server.use(express.static("files"));




// Initializing the pages link
// End users links
server.use("/", root_links);
// Admin area links
server.use("/ph", admin_area_links);
// Client Area
server.use("/dashboard", client_area_links);







// Running the server
server.listen(process.env.PORT || 5992);