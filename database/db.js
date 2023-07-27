import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const DBConnection = async () => {
    const MONGODB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-nkt89qk-shard-00-00.aeqllzk.mongodb.net:27017,ac-nkt89qk-shard-00-01.aeqllzk.mongodb.net:27017,ac-nkt89qk-shard-00-02.aeqllzk.mongodb.net:27017/?ssl=true&replicaSet=atlas-jn7e1y-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBConnection;