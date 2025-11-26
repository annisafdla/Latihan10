import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';

// Load .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.json());

// User Routes
app.use('/api/users', userRoutes);

// Product Routes
app.use('/api/products', productRoutes);

app.use('/api/login', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World');
});


app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
