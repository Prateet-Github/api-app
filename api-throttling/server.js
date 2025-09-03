import express from 'express';
import slowDown from 'express-slow-down';

const app = express();
const PORT = 5050;

// Throttling middleware
const speedLimiter = slowDown({
  windowMs: 60 * 1000, 
  delayAfter: 3,       
  delayMs: (used, req) => {
    const delayAfter = req.slowDown.limit;
    return (used - delayAfter) * 500; 
  },
});

app.use(speedLimiter);

app.get('/', (req, res) => {
  res.send('Hello, world! This API is throttled.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});