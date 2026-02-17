const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, "public")));

// Parse GET form submissions
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.get("/volunteer", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "volunteer.html"));
});

// Handle GET form submission
app.get("/submit", (req, res) => {
    const { name, email, other } = req.query;

    res.send(`
        <h1>Form Submitted</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Other Contact:</strong> ${other}</p>
        <a href="/contact">Go Back</a>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});