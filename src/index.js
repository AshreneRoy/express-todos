const express = require('express');
const { todoRoute } = require('./routes');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use('/todo', todoRoute);
app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
