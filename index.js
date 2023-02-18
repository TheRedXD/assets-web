import express from 'express';
import path from 'path';

const __dirname = path.resolve();

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// now we just serve the folder assets, which i can just drop in content into and it will automatically update
app.use('/assets', express.static('assets'));

app.get('/favicon.ico', (req, res) => {
    res.sendFile(__dirname + '/favicon.ico');
});

// 404
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/404.html');
});

app.listen(port, () => {
    console.log('Server is running on port '+port);
});