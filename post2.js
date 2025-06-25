const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/hapus', (req, res) => {
  res.json({
    data: 0,
    status: "berhasil hapus"
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
