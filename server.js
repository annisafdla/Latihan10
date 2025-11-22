import express from 'express';

import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/products.routes.js';

const app = express();
const PORT = 8001;

app.use(express.json());

// User Routes
app.use('/api/users', userRoutes);

// Product Routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
