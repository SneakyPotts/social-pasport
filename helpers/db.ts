import mongoose from 'mongoose'

export default async function connect() {
  try {
    await mongoose.connect(process.env.DB_HOST!)
    console.log('Successfully connected to MongoDB!')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw new Error('Error connecting to MongoDB')
  }
}
