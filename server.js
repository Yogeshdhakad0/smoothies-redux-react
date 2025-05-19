// server.js

import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Support __dirname in ES Module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Setup
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// ✅ Read users from db.json
app.get('/users', (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'db.json')
    const jsonData = fs.readFileSync(dataPath, 'utf-8')
    const parsedData = JSON.parse(jsonData)
    res.json(parsedData.users)
  } catch (error) {
    res.status(500).json({ error: 'Failed to read db.json' })
  }
})

// 🔘 Optional: default route
app.get('/', (req, res) => {
  res.send('API is working ✅')
})

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`)
})
