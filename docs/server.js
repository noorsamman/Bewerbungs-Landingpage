const express = require('express');
const path = require('path');

const app = express();

// Serve all static files (html, css, images)
app.use(express.static(__dirname));

// Start server on Render PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server läuft auf Port ' + PORT);
});
