const mongoose = require('mongoose');
const MongoURL = 'mongodb+srv://nishanth:nishanth2003@cluster0.mongodb.net/Food';

const mongoDB = async () => {
  try {
    await mongoose.connect(MongoURL, { useNewUrlParser: true });
    console.log('Connected to MongoDB successfully');

    const fetched_data = await mongoose.connection.db.collection("FoodData");
    fetched_data.find({}).toArray(async function(err,data){
     const foodCategory=await mongoose.connection.db.collection("FoodCategory");
     foodCategory.find({}).toArray(function(err,catData){
      if(err) {
        console.log(err);
      }else{
        global.FoodData=data;
        global.FoodCategory=catData;
      
      }
     })
    });
    // console.log(data);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

module.exports = mongoDB;
