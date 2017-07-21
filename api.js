const express = require('express')

let app = express();

app.set("port", process.env.PORT || 3002);
app.use(parser.json({extended: true}));
