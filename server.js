const express = require("express")
const path =require("path")
const cors = require("cors")

// Import JSON files
const projects = require("./projects.json")

// Create app object
const app = express()

// Middleware
app.use(cors("*"))
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")))

// Test/home route
app.get("/", (req, res) => {
    res.send("Hello World")
})

// Route for retrieving project data
app.get("/projects", (req, res) => {
    res.json(projects)
})

// Port number
const PORT = process.env.PORT || 4000

// Turn on server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))