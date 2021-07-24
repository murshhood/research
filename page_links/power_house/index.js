const express = require("express");
const admin_area_link = express.Router();

admin_area_link.get("/", (que, ans) => {
    ans.send("Dashboard - Home");
});

module.exports = admin_area_link;