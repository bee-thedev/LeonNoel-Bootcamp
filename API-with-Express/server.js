const express = require('express');
const app = express();

const PORT = 8000;

const family = {
    'FamilyName': 'Rao',
    'FamilyCaste' : 'Rajput',
    'FamilyMembers': 16
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname, '/index.html');
})

app.get('/api', (request, response)=>{
    response.json(family)
})

app.listen((PORT), ()=>{
    console.log(`Server listening on port ${PORT}`);
})