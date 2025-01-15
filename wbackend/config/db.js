import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongourl = 'mongodb+srv://admin:admin@nivash.nrt23.mongodb.net/?retryWrites=true&w=majority&appName=nivash';

if (!mongourl) {
    throw new Error('MongoDB URI is not defined in the .env file.');
}

// Connect to MongoDB
mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch((err) => console.error('DB connection error:', err));
export default mongoose;