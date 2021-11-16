import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express();
const PORT = process.env.PORT || 5000;
const CONNECTIONP_URL = 'mongodb+srv://reminiscence:reminiscence123@cluster0.w2bbr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'




app.use('/posts', postRoutes)
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


mongoose.connect(CONNECTIONP_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))).catch((error) => console.log(error.message))