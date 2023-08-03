import cors from 'cors'
import express from 'express'

import data from './data.json'

// create server
const server = express()
const port = 4000

// GET question endpoint
server.get('/api/questions', cors(), (_, res) => {
  res.json(data)
})

// starting server
server.listen(port, () => {
  console.log(`Server listening at ${port}.`)
})
