const express = require("express");
const client_area_links = express.Router();

client_area_links.get("/", (que, ans) => {
    ans.send("Clients");
});

module.exports = client_area_links;