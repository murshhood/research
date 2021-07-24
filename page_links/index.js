const express = require("express");
const page_link = express.Router();

page_link.get("/", (que, ans) => {
    ans.render("index");
});

module.exports = page_link;