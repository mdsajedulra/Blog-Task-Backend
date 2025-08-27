
import express, { Application } from 'express';
import cors from 'cors';


const app: Application = express();

app.use(express.json());


const allowedOrigins = [
  'http://localhost:5173',
  'http://book-shop-client-ashy.vercel.app'
];


app.use(cors( { origin: function (origin, callback) {
  if (!origin || allowedOrigins.includes(origin)) {
    callback(null, true);
  } else {
    callback(new Error('Not allowed by CORS'));
  }
},
credentials: true
}));