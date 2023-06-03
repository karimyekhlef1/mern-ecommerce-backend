const mongoose = require('mongoose')


 const connectionString ='mongodb+srv://admin:admin@cluster0.53qf7r4.mongodb.net/?retryWrites=true&w=majority';

 mongoose.connect(connectionString)

.then(() => {
  console.log('MongoDB connected successfully');
}).catch((err) => {
  console.log('MongoDB connection error:', err);
});

module.exports =mongoose