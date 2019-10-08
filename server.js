const express = require('express');
const server = express();
const fs = require('fs')
const http = require ('http')
const data = require('./data.js')
server.use(express.static(__dirname + '/static/'))
server.use(express.static(__dirname + '/assets/'))
server.use((request, response, next) => {
    console.log('Logger:', request.url, request.method);
    next();
})
server.get(/word/, (request, response) => {
    if(request.query.sw) {
        let searchAnswer = data.filter(function(hits) {
            return hits.searchWord == request.query.sw;
        })
        response.send(searchAnswer)
    } else {
        response.send(data.map(hit => hit.searchWord))
    }
})
server.get(/index.html/, (request, response) => {
    response.send()
})
    

server.use((error, request, response, next) => {
    console.log('An internal error occurred.', error);
    response.status(500)
    .send('fail', error);
})

server.listen(3000, () => console.log('Example app listening on port 3000!'))

