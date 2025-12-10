const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from My-App! Hamza');
});

if (require.main === module) {
  // Luister op alle interfaces voor Docker
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app; // exporteer de app voor tests
