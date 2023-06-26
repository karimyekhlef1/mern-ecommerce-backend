const mongoose = require('mongoose')


//  const connectionString =;

 mongoose.connect(process.env.DB_URL)

.then(() => {
  console.log('MongoDB connected successfully');
}).catch((err) => {
  console.log('MongoDB connection error==========>', err);
});

module.exports =mongoose 