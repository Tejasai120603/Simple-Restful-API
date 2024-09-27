const express = require('express');
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// API route
app.get('/api/data', (req, res) => {
    res.json({ message: 'This is your data!', items: [1, 2, 3, 4, 5] });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
