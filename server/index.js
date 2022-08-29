const express=require('express');
const app=express();
const {dbConnect}=require('./config/dbConnect');

const { route } = require('./routes/todoRoutes');

dbConnect

app.use(express.json())
app.use('/api',route)
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})