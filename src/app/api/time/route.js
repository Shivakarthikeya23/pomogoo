import { connectToDB } from '@/utils/database';
import Time from '@/models/time';

export const GET = async (req) => {
    try {
        await connectToDB();
        const times = await Time.find({}).populate('creator');

        return new Response(JSON.stringify(times), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch all times", { status: 500 });
    }
}