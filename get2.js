const express = require('express');
const app = express();
const port = 3000;

app.get('/hapus-setoran', (req, res) => {
  res.json({
    message: "berhasil",
    id_setoran: 58,
    id_user: 3441,
    id_juz: 30
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
