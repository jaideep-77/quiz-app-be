const express = require('express');
const cors = require('cors');
const game = require('./routes/game');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.use('/game', game);

app.get('/', (req, res) => {
    res.send('Get request on /');
})

app.get('/hello', (req, res) => {
    res.json(({ message: 'come on' }));
})

app.get('/questions', (req, res) => {
    res.json({ message: 'hello' })
})

app.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`);
})

// Use MongoDB and host the server on Heroku
// Host FE on netlify