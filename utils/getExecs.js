import { connectToDb } from '@utils/database'
import Execs from '@models/execs'

export const getExecs = async () => {
    try {
        await connectToDb()

        const res = await Execs.find({})

        return res
    } catch (error) {
        console.log('Error getting about: ', error)

        return { props: { error } }
    }
}
