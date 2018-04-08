const express = require('express');
const app = express();
const PORT = process.env.PORT || 3009;
const bookRoutes = require('./routes/books');
const writerRoutes = require('./routes/writers');
app.use(express.json()); //Body parser

app.get('/', (request, response) => {
    response.send('Books and Writers: Slash route is ready');
});

app.use('/books', bookRoutes);
app.use('/writers',writerRoutes);

app.listen(PORT, () => {
    console.log(`Books and Writers: Listening on port no. ${PORT}...`);
})
