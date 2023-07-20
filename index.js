const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const app=express();
const connectDb= require("./db");
const taskRoute=require("./Routes/taskRoute");
const path=require("path");

app.use(express.json());
app.use(cors());


dotenv.config();
connectDb();

app.use("/api/v1",taskRoute)
const PORT=process.env.PORT||5000;

const __dirname1=path.resolve();
console.log(__dirname1)

 if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/client/build")));

 app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1,"client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

app.listen(PORT,()=>{
    console.log("Backend connected")
})

