const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from My-App! Hamza');
});

if (require.main === module) {
  // Alleen luisteren als dit bestand direct wordt uitgevoerd
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app; // exporteer de app voor tests
