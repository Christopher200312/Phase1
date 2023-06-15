const express = require('express');

require("./config/database")

const port = 2010;

const app= (express())

app.use(express.json());

//default get 

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and running"
    })
})

app.listen(port, (req, res) => {
    console.log("")
    console.log("server listening on port", port)
})