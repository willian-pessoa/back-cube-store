const express = require('express')
const app = express()
const PORT = 3000

const CUBES = require("./data/cubes.json")

app.get('/v1/cubes', (req, res) => {
  res.status(200).json({...CUBES})
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
  console.log("Click to acesse: ", new URL("http://localhost:3000/").href)
})
