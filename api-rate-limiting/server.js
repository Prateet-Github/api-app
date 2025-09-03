import express from 'express';
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = 5001;

// Rate limiting middleware

const limiter = rateLimit({
  windowMs:  60 * 1000, 
  max: 5, 
  message: 'Too many requests, please try again later.'
});

app.use(limiter); 

app.get('/', (req, res) => {
  res.send('Hello, world! This API is rate limited.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});