const app=require('./app')
const connectDatabase =require('./config/database')
const dotenv = require('dotenv');
// handle the uncaught exceptions
process.on('uncaughtException', err =>{
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to unhandled Promise Rejection');
    process.exit(1)
})
// setting up config file
dotenv.config({ path: 'Backend/config/config.env' })

// connecting to database
connectDatabase();
const server=app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode .`) 
})
// handle unhandled promise rejections
process.on('unhandledRejection', err =>{
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to unhandled Promise Rejection');
    server.close(() => {
        process.exit(1)
    })
})