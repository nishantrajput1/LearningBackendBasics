const express = require('express')
const multer = require('multer')
const uploadFile = require("./services/storage.service")
const postModel = require('./models/post.model')

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors())
// ye middle image ko read nahi change kar payega

const upload = multer({ storage: multer.memoryStorage() })
// express file ko read kar payega multer ki madaad se 
app.post("/create-post", upload.single("image"), async (req, res) => {
    console.log("Trying to create post");
    
    console.log(req.body);
    console.log(req.file);
    const result = await uploadFile(req.file.buffer);
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    return res.status(201).json({
        message: "Post created successfully",
        post
    })
})
app.get("/get-post", async(req, res) => {
    const post = await postModel.find();
    res.status(200).json({
        message: "Posts fetched successfully",
        post: post,
    })
})
module.exports = app;
