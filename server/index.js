const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Placeholder for future DB connection
// mongoose.connect('mongodb://localhost/aurah-portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/api/aurah-stats', (req, res) => {
  res.json({
    projectsCompleted: '350+',
    experienceYears: 5,
    happyClients: '120+',
    totalViews: '50M+'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
