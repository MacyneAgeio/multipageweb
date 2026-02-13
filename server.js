const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

app.get('/api/blogs', (req, res) => {
    const blogData = [
        { 
            title: "Found: Blue Keys", 
            content: "Found near the University Gym. Please contact the admin office.", 
            date: "2026-02-13" 
        },
        { 
            title: "Lost: Engineering Calculator", 
            content: "Left in Room 302. It has a 'JR' sticker on the back.", 
            date: "2026-02-12" 
        }
    ];
    res.json(blogData);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});