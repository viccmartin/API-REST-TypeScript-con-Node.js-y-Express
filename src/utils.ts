import { Visibility, Weather, newDiaryEntry } from './types'

const isString = (string: string): boolean => {
  return (typeof string === 'string')
}
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}
const isWeather = (string: any): boolean => {
  return Object.values(Weather).includes(string)
}
const isVisibility = (string: any): boolean => {
  return Object.values(Visibility).includes(string)
}

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('incorrect comment')
  }
  return commentFromRequest
}
const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('incorrect date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('incorrect weather')
  }
  return weatherFromRequest
}
const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('incorrect visibility')
  }
  return visibilityFromRequest
}

const toNewDiaryEntry = (object: any): newDiaryEntry => {
  const newEntry: newDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}
export default toNewDiaryEntry
