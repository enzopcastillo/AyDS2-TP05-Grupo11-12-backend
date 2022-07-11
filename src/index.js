require('./database');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({origin: "http://localhost:4200"}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/alquileres', require('./routes/alquiler.routes'));
app.use('/api/catalogos', require('./routes/catalogo.routes'));
app.use('/api/clientes', require('./routes/cliente.routes'));
app.use('/api/maquinarias', require('./routes/maquinaria.routes'));

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Server started on port', app.get('port'));
});