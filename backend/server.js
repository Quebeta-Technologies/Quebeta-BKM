import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ============================================
// MIDDLEWARE
// ============================================
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiter for contact endpoint
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 5,
  message: { error: 'Too many contact submissions. Please try again later.' },
});

// ============================================
// ROUTES
// ============================================
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Quebeta API', time: new Date().toISOString() });
});

app.use('/api/contact', contactLimiter, contactRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong', message: err.message });
});

// ============================================
// BOOT
// ============================================
const start = async () => {
  try {
    if (process.env.MONGO_URI) {
      await connectDB(process.env.MONGO_URI);
    } else {
      console.warn('⚠️  MONGO_URI not set. Server running without DB.');
    }
    app.listen(PORT, () => {
      console.log(`🚀 Quebeta server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Boot failed:', err.message);
    process.exit(1);
  }
};

start();
