
 const cors = require('cors')
 const express = require('express');
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

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
