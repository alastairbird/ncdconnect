const path = require('path');
const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;

// enable ssl redirect
app.use(sslRedirect());

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (request, response) => {
    response.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, error => (
    error
        ? console.error(error)
        : console.info(`Listening on port ${PORT}.`)
));
