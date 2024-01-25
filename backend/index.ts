import cors from 'cors'
import express from 'express'

const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
  console.log(`Engine running on port ${PORT} 🚀`)
})

export default app
