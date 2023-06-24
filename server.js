const express = require("express")
const cors = require("cors")

// Import JSON files
const projects = require("./projects.json")

// Create app object
const app = express()

// Middleware
app.use(cors("*"))
// Serve static files from the "images" directory
app.use('/images', express.static('images'));

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