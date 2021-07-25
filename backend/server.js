import path from 'path';
// bring in expresss
import express from 'express';
// import routes
import productRoutes from './routes/productRoutes.js';
//morgan
import morgan from 'morgan';
//cors
import cors from 'cors';
//partners
import partnersRoutes from './routes/partnersRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

// error files
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
//import connect DBn
import connectDB from './config/db.js';
//import colors js
import colors from 'colors';
// dot env
import dotenv from 'dotenv';
dotenv.config();
connectDB();

// initialize express
const app = express();

app.use(
  cors({
    origin: '*',
  })
);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// routes
app.use('/api/products', productRoutes);
app.use('/api/partners', partnersRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname), 'index.html');
  });

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running.....');
  });
}

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
// const PORT = 5001;

// setup port
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
      .bold
  )
);
