import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

//initialise the app
const app=express();
dotenv.config();



app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

app.use('/posts',postRoutes);

app.get('/',(req,res)=>{
  res.send("Hello to Memories API");
});

//database url hosted in mongoDB Atlas
const PORT = process.env.PORT || 5000;

//connecting the database to our server application
mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }).then(()=>app.listen(PORT,()=>console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error)=>console.log(error.message));
