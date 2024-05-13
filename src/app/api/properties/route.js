import connectDB from "@/config/database";
import Property from "@/models/Property";

// Get /api/properties
export const GET = async (request) => {
    try {
        await connectDB();
        console.log("Connected to database.")

        const properties = await Property.find({});
        return Response.json(properties);

        //return new Response(JSON.stringify(properties), {status: 200})
    } catch (error) {
        console.log(error);
        return new Response("API Error", {status: 500});
    }
};