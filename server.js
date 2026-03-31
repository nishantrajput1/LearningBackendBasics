const express = require('express');
const app = express(); // server create kara 

app.listen(3000, () => {
    console.log("Server running on port 3000");

});app.get("/", (req, res) => {
    res.send("Hello Hello Bogi Bogi here");
})
app.get("/about", (req, res) => {
    res.send("Hello I am the about page");
})