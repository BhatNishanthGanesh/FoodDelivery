const mongoose = require('mongoose');
const MongoURL = 'mongodb+srv://nishanth:nishanth2003@cluster0.fbotoww.mongodb.net/Food';

const mongoDB = async () => {
    try {
        await mongoose.connect(MongoURL, { useNewUrlParser: true });
        console.log('Connected to MongoDB successfully'); 

        const fetched_data = await mongoose.connection.db.collection("FoodData");
        const data = await fetched_data.find({}).toArray();
        // console.log(data);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    } 
}

module.exports = mongoDB;
