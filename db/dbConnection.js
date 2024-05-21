import mongoose from 'mongoose';

let dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('connected to db ');

    } catch (error) {
        console.log(error);
    }
}
 

export { dbConnect } 