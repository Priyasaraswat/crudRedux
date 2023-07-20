const mongoose=require("mongoose");

mongoose.set("strictQuery", false);
const connectDb=()=>{
    mongoose.connect(process.env.MONGO_URL || "mongodb+srv://priyasaraswat766:RKsSHAkDX5jQmUAl@cluster0.0jdxu78.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
        console.log("Database Connected")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports=connectDb