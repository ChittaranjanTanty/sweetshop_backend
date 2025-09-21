const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');

const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoute');
const sweetRouter = require("./routes/sweetRoute");

const app = express();

const corsOptions = {
    origin: process.env.FRONTEND_URL, // frontend URL
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true // <--- allow cookies
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// Routing middlewares
app.use('/api/auth', userRouter);
app.use('/api/auth', authRouter);
app.use("/api/sweets", sweetRouter);

app.get('/ping', (req, res) => {
    console.log(req.body);
    console.log(req.cookies);
    return res.json({ message: 'pong' });
});

// Start the server
app.listen(ServerConfig.PORT, async () => {
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}...!!`);
});