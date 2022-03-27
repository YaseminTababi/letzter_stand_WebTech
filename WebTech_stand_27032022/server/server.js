const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const cors = require('cors');

// Load env file
dotenv.config({ path: './config/config.env' });

// Load student router
const students = require('./routes/students');

connectDB();
const app = express();

app.use(express.json());
app.use(cors({origin: '*'}));
const PORT = process.env.PORT || 5001;

// Dev logging middleware
if (process.env.NODe_ENV === 'development') {
    app.use(morgan('dev'));
}
// Mount  routers
app.use('/api/v1/students', students);

app.use(errorHandler);

const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODe_ENV} made on port ${PORT}`)
);

// Handle unhandled promise rejections

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
})