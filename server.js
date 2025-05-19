// // server.js

// import express from 'express'
// import cors from 'cors'
// import fs from 'fs'
// import path from 'path'
// import { fileURLToPath } from 'url'

// // Support __dirname in ES Module
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// // Setup
// const app = express()
// const PORT = process.env.PORT || 3001

// app.use(cors())
// app.use(express.json())

// // ✅ Read users from db.json
// app.get('/users', (req, res) => {
//   try {
//     const dataPath = path.join(__dirname,'db.json')
//     const jsonData = fs.readFileSync(dataPath, 'utf-8')
//     const parsedData = JSON.parse(jsonData)
//     res.json(parsedData.users)
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to read db.json' })
//   }
// })

// // 🔘 Optional: default route
// app.get('/', (req, res) => {
//   res.send('API is working ✅')
// })

// // Start the server
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running at http://localhost:${PORT}`)
// })





// // server.js
// import express from 'express'
// import cors from 'cors'
// import fs from 'fs'
// import path from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// const app = express()
// const PORT = process.env.PORT || 3001

// app.use(cors())
// app.use(express.json())

// // ✅ Load db.json data
// const getDbData = () => {
//   const dataPath = path.join(__dirname, 'db.json')
//   const jsonData = fs.readFileSync(dataPath, 'utf-8')
//   return JSON.parse(jsonData)
// }

// // 🟩 Endpoint: /smoothies
// app.get('/smoothies', (req, res) => {
//   try {
//     const data = getDbData()
//     res.json(data.smoothies)
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to read smoothies data' })
//   }
// })

// // 🟩 Endpoint: /addOns
// app.get('/addOns', (req, res) => {
//   try {
//     const data = getDbData()
//     res.json(data.addOns)
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to read addOns data' })
//   }
// })

// // 🟩 Endpoint: /deliveryCharges
// app.get('/deliveryCharges', (req, res) => {
//   try {
//     const data = getDbData()
//     res.json(data.deliveryCharges)
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to read delivery charges' })
//   }
// })

// // 🟡 Default route
// app.get('/', (req, res) => {
//   res.send('API is working ✅')
// })

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`)
// })





// server.js
import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// ⬇️ Helper to read db.json
const getDbData = () => {
  const dataPath = path.join(__dirname, 'db.json')
  const jsonData = fs.readFileSync(dataPath, 'utf-8')
  return JSON.parse(jsonData)
}

// ✅ Route: /smoothies
app.get('/smoothies', (req, res) => {
  try {
    const data = getDbData()
    res.json(data.smoothies)
  } catch (error) {
    res.status(500).json({ error: 'Failed to load smoothies' })
  }
})

// ✅ Route: /addOns
app.get('/addOns', (req, res) => {
  try {
    const data = getDbData()
    res.json(data.addOns)
  } catch (error) {
    res.status(500).json({ error: 'Failed to load add-ons' })
  }
})

// ✅ Route: /deliveryCharges
app.get('/deliveryCharges', (req, res) => {
  try {
    const data = getDbData()
    res.json(data.deliveryCharges)
  } catch (error) {
    res.status(500).json({ error: 'Failed to load delivery charges' })
  }
})

// Optional: test route
app.get('/', (req, res) => {
  res.send('✅ Smoothie API is working')
})

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`)
})
