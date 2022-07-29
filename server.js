const express = require('express');
const cors = require('cors');
const game = require('./routes/game');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.use('/game', game);

app.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`);
})
