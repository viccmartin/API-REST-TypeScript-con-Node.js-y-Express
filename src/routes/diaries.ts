import express from 'express'
import * as diaryServices from '../services/diaryService'
import toNewDiaryEntry from '../utils'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})
router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  return (diary !== null)
    ? res.send(diary)
    : res.sendStatus(404)
})
router.post('/', (req, res) => {
  try {
    // const { date, weather, visibility, comment } =
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedNewDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedNewDiaryEntry)
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message)
    } else {
      res.status(400).send('Unknown error')
    }
  }
})

export default router
