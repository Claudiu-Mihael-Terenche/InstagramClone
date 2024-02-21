import express from 'express';
import { db } from './connect.js';
import authRoutes from './middleware/auth.js';
import userRoutes from './routes/user.js';
import postRoutes from './routes/post.js';
import commentRoutes from './routes/comment.js';
import likeRoutes from './routes/like.js';
import relationshipRoutes from './routes/relationship.js';
import cors from 'cors';
import multer from 'multer';
import cookieParser from 'cookie-parser';

const app = express();
const port = 8800;

// Test the database connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1); // Exit the application if there's an issue with the database connection
  } else {
    console.log('Connected to the database!');
  }
});

// middleware setup
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(cookieParser());

// File upload configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});


// route setup
app.use('/api/auth', authRoutes);
app.use('/api/users', authenticateUser, userRoutes);  // Use authenticateUser middleware here
app.use('/api/posts', authenticateUser, postRoutes);
app.use('/api/comments', authenticateUser, commentRoutes);
app.use('/api/likes', authenticateUser, likeRoutes);
app.use('/api/relationships', authenticateUser, relationshipRoutes);

app.listen(port, () => {
  console.log(`API working! Listening on port ${port}`);
});