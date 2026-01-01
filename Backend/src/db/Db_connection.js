import mongoose from "mongoose";

const connectDb = async () => {
    
    try {
        const connectionResp = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`MONGODB CONNECTED SUCCESSFULLY !! DB HOST: ${connectionResp.connection.host}`);
    } catch (error) {

        console.log("MONGODB CONNECTION ERROR", error);
        process.exit(1);
        
    }
};

export default connectDb;