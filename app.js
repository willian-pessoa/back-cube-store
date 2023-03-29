const express = require('express')

const CUBES = require("./data/cubes.json")
const PORT = 3000

const app = express()

app.use(express.json())

app.get('/v1/cubes', (req, res) => {
  res.status(200).json({
    status: "success",
    result: CUBES.cubes.length,
    data: CUBES.cubes
  })
})

app.post("/v1/cubes", (req, res) => {

  const newId = Number(CUBES.cubes[CUBES.cubes.length - 1].id) + 1;

   const newCube = {
     id: newId,
     ...req.body
   }
   CUBES.cubes.push(newCube)

  res.status(201).json({
    status: "success",
    data: newCube
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
  console.log("Click to acesse: ", new URL("http://localhost:3000/").href)
})
