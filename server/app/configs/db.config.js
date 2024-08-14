import mongoose from 'mongoose'

const connectToDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected ⚡ to the database successfully! 🎉, ${db.connection.host}`);

    } catch (error) {
        console.error(`Cannot connect to the database, ${error.message}`);
        process.exit(1);
    }
};

export default connectToDB;