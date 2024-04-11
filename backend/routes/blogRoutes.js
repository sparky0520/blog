import express from "express";
import { Blog } from "../models/blogModel.js";

const router = express.Router()

// Get all blogs 
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find({})
        return res.status(200).json({
            count: blogs.length,
            data: blogs
        })
    } catch (err) {
        console.log(err.message)
        return res.status(500).send({ message: err.message })
    }
})

// Finding a specific blog by id
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const blog = await Blog.findById(id)
        if (!blog) {
            return res.status(404).send({ message: "Blog not found." })
        }
        return res.status(200).json(blog)
    } catch (err) {
        console.log(err.message)
        return res.status(500).send({ message: err.message })
    }
})

// Update a particular blog
router.put("/:id", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.imageURL || !req.body.content) {
            return res.status(404).send({
                message: "Send all required fields: title, author, imageURL, content"
            })
        }
        const { id } = req.params
        const result = await Blog.findByIdAndUpdate(id, req.body)

        if (!result) {
            return res.status(404).json({ message: "Blog not found." })
        }
        return res.status(200).send({ message: "Blog Successfully Updated." })
    } catch (err) {
        console.log(err.message)
        return res.status(500).send({ message: err.message })
    }
})

// Delete a blog of specific id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const result = await Blog.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send({ message: "Blog not found." })
        }
        return res.status(200).send({ message: "Blog Deleted Successfully." })
    } catch (err) {
        console.log(err.message)
        return res.status(500).send({ message: err.message })
    }
})

// Add new blog to db
router.post("/", async (req,res) => {
    try{
        if(!req.body.title || !req.body.author || !req.body.imageURL || !req.body.content){
            return res.send(400).send({message: "Send all required fields: title, author, content, imageURL"})
        }
        const newBlog = {
            title: req.body.title,
            author: req.body.author,
            imageURL: req.body.imageURL,
            content: req.body.content
        }
        const blog = await Blog.create(newBlog)
        return res.status(201).send(blog) 
    }catch(err){
        console.log(err.message)
        return res.status(500).send({message: err.message})
    }
})

export default router