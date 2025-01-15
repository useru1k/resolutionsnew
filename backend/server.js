import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Root Route
app.get('/', (req, res) => {
    res.send("Welcome, Home!!!");
});

// API Routes
app.use('/auth', authRoutes);

// 404 Handler (Place this last)
app.use('*', (req, res) => {
    res.status(404).send('Route not found');
});

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB error:', err));

// Server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
