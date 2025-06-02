// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const User = require('./models/User'); // Import the User model
const Contact = require('./models/Contact');



const app = express();
const server = http.createServer(app);

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://satyam:satyam123@cluster0.2o65g.mongodb.net/portfolioDB';
mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB error:', err));

// Socket.IO Setup
const io = new Server(server, {
  cors: {
    origin: '*', // Replace with frontend URL in production
    methods: ['GET', 'POST']
  }
});
app.use(cors({
  origin: "https://satyam0049.github.io", // Production frontend origin
  methods: ["GET", "POST"],
}));

let usersOnline = 0;

io.on('connection', async (socket) => {
  usersOnline++;
  console.log(`🟢 User connected: ${socket.id}`);

  // Save user to DB
  try {
    await User.findOneAndUpdate(
      { socketId: socket.id },
      {
        socketId: socket.id,
        connectedAt: new Date(),
        disconnectedAt: null,
        isConnected: true
      },
      { upsert: true, new: true }
    );
  } catch (err) {
    console.error('❌ DB Save Error on Connect:', err);
  }

  io.emit('users', usersOnline);

  socket.on('disconnect', async () => {
    usersOnline--;
    console.log(`🔴 User disconnected: ${socket.id}`);

    // Update DB
    try {
      await User.findOneAndUpdate(
        { socketId: socket.id },
        {
          disconnectedAt: new Date(),
          isConnected: false
        }
      );
    } catch (err) {
      console.error('❌ DB Save Error on Disconnect:', err);
    }

    io.emit('users', usersOnline);
  });
});

// API to fetch user stats
app.get('/api/user-stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({});
    const onlineUsers = await User.countDocuments({ isConnected: true });

    res.json({ totalUsers, onlineUsers });
  } catch (err) {
    console.error('❌ Error fetching user stats:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST: Save contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  console.log(name,email,message);


  try {
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: "Server error" });
  }
});


// Root route
app.get('/', (req, res) => {
  res.send('🚀 Server is running!');
});

// Start Server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🌐 Server listening at http://localhost:${PORT}`);
});
