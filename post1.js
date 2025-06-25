const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/data', (req, res) => {
  res.json({
    data: 100,
    status: 'berhasil'
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
