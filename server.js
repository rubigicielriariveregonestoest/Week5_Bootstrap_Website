const express = require('express');
const path = require('path');
const app = express();

const indexPath = path.join(__dirname, 'index.html');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(indexPath);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
