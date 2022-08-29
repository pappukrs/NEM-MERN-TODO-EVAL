const mongoose=require('mongoose');


const dbConnect=async()=>{
    try {
        const connected=await mongoose.connect('string',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        })
        console.log(`Mongodb connected ${connected.host}`)
    } catch (err) {
        console.log(`error occured ${err.message}`)
    }
}

modeule.exports={dbConnect}