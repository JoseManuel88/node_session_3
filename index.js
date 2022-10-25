const express = require('express');
const indexRoutes = require('./src/api/index/index.routes');
const characterRoutes = require('./src/api/characters/characters.routes')

const server = express();
const PORT = 3000;

server.use('/', indexRoutes);
server.use('/characters', characterRoutes );

server.listen(PORT, () => {
console.log(`Servidor a todo gas en http://localhost:${PORT}`);
});