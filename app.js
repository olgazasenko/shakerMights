const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

const router = require('./routes/routes');
router.routesConfig(app);

app.listen(port,() => {
  console.log(`Server running at port ${port}`);
});