require('dotenv').config();

const express = require("express");
            const app = express();
const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("Hello World PK");

});

app.listen(port,()=> {
    console.log(`Examper app listening at http://localhost:${port}`);

});