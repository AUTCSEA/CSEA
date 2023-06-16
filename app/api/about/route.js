import { connectToDb } from '@utils/database';
import About from '@models/aboutus';

export const GET = async (req, res) => {
  console.log('GET /api/about');
  try {
    await connectToDb();

    const about = await About.find({});

    return new Response(JSON.stringify(about), { status: 200 });
  } catch (error) {
    console.log('Error getting about: ', error);

    return new Response('Error getting about', { status: 500 });
  }
};
