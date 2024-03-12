import mongoose from 'mongoose'

let isConnected = false

export const connectToDb = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('already connected')
        return
    }

    try {
        await mongoose.connect(process.env.MONGO_KEY, {
            dbName: process.env.MONGO_DBNAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true
    } catch (error) {
        console.log('Error connecting to database: ', error)
    }
}
