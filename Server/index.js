
const express = require('express')
var cors = require('cors');


const app = express()
const port = 5000

app.use(cors())
   
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use('/api/v1',require('./routes/placeorder'));
app.use('/api/v2',require('./routes/product'));

app.get('/',(req,res)=>{
    res.send('helloworld')
})
app.listen(port, () => {
    console.log(`Twitter backend listening at http://localhost: ${port}`)
})

 
