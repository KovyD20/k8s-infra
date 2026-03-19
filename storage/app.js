const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/storage', async (req, res) => {
    const r = await axios.get(process.env.AUTH_SERVICE_URL + '/auth');
    res.json({storage: 'ok', auth: r.data});
});

app.listen(port, () => {
  console.log(`Storage app listening at http://localhost:${port}`);
});