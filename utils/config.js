require('dotenv').config()

const PORT = process.env.PORT
// const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_URI = process.env.NODE_ENV === 'test' ? process.env.TEST_MONGODB_URI : process.env.MONGODB_URI

if (!process.env.MONGODB_URI) {
  throw new Error('Missing MONGODB_URI environment variable')
}
if (!process.env.TEST_MONGODB_URI) {
  throw new Error('Missing TEST_MONGODB_URI environment variable')
}

module.exports = {
  MONGODB_URI,
  PORT
}
