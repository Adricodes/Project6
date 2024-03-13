//MONGO PWD
//MONGO CONNECTION

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});

const Thing = require('./models/thing');
const stuff = [
  {
    _id: 'oeihfzeoi',
    title: 'My first thing',
    description: 'All of the info about my first thing',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
    price: 4900,
    userId: 'qsomihvqios',
  },
  {
    _id: 'oeihfzeomoihi',
    title: 'My second thing',
    description: 'All of the info about my second thing',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
    price: 2900,
    userId: 'qsomihvqios',
  }
]

const stuffRoutes = require('./routes/stuff');
const SauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fykvygd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));

// app.use(bodyParser.json())
app.use('/api/stuff', stuffRoutes);
app.use('/api/sauces', SauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;

