const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/claim', require('./routes/claimRoutes'));

app.listen(5000, () => console.log('Server started on port 5000'));
