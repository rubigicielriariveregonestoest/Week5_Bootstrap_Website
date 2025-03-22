const express = require('express');
const path = require('path');
const app = express();

const directoryPath = '/storage/emulated/0/Week5_Bootstrap_Website';

app.use(express.static(directoryPath));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(directoryPath + '/index.html'));
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
