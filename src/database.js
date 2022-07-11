const mongoose = require('mongoose');
const url_database = 'mongodb://localhost/alquileres_db';

mongoose.connect(url_database, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(db => console.log('Database connected'))
.catch(err => console.error(err));