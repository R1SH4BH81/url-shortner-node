const mongoose = require('mongoose');
require('dotenv').config(); 
mongoose.set("strictQuery",true)
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection FAILED", error);
        process.exit(1);
    }
}

module.exports = connectDB;
