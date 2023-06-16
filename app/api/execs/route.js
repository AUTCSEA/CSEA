import { connectToDb } from '@utils/database';
import Execs from '@models/execs';

export const GET = async (req, res) => {
  console.log('GET /api/about');
  try {
    await connectToDb();

    const execs = await Execs.find({});

    return new Response(JSON.stringify(execs), { status: 200 });
  } catch (error) {
    console.log('Error getting about: ', error);

    return new Response('Error getting execs', { status: 500 });
  }
};
