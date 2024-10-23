const express = require('express');
const app = express();
const clientes = require('./src/controllers/clientes'); 

app.use(express.json()); 

app.put('/clientes/:id', clientes.update); 

app.post('/clientes', clientes.create); 
app.get('/clientes', clientes.read);   
app.delete('/clientes/:id', clientes.delet); 

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
