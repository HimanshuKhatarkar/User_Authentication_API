import dotenv from 'dotenv'
dotenv.config()
import mongoose, {connect} from 'mongoose';


var db = process.env.DATABASE_URL;

const connectDb = async (db) =>{
    try {
        const DB_OPTION = {
            dbName: "Monter_User_DB"
        }
        await mongoose.connect(db, DB_OPTION)
        console.log('Connected Successfully.....')
    } catch (error) {
        console.log(error)
    }
};

export default connectDb;