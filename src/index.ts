import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // mildware que transforma la req.body a un json

const PORT = 3000
app.get('/ping', (_req, res) => {
  console.log('someone pinged here')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
