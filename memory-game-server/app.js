const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require("cors");
const usersRouter = require('./routes/users');
const jsonBodyParser = require('./middlewares/jsonBodyParser');
const logger = require('./middlewares/logger');

const app = express();

app.use(cors());
app.use(jsonBodyParser);
app.use(logger);
app.use("/users", usersRouter);

const port = process.env.port || 9000;

app.listen(9000, () => console.log(`Server is running on port ${port}`));
