
 const cors = require('cors')
 const express = require('express');
 require('dotenv').config();
 require('./config/connect')
 const app = express();
app.use(cors())
app.use(express.json())


const UserRoute =require('./routes/UserRoute')
const ProductRoute =require('./routes/ProductRoute')
const OrderRoute = require('./routes/OrderRoute')

app.use('/api/user',UserRoute)
app.use('/api/product',ProductRoute)
app.use('/api/order',OrderRoute)



app.get('/', (req, res) => {
  res.send('Hello,>>>>> World!');
})

app.listen( process.env.PORT, () => {
  console.log(`Server started on port ${ process.env.PORT}`);
  
});