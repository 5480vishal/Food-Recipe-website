

const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://Vishal5480:Vishal5480@cluster0.xe7fg.mongodb.net/Recipes?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Models
require('./Category');
require('./Recipe');
