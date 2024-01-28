import mongoose from 'mongoose';

(async () => {
  switch (process.env.DB_CONN_TYPE) {
    case 'local':
      await mongoose.connect('mongodb://localhost:27017/yelp-camp-2024');
      console.log(`Mongoose connected to LOCAL database.`);
      break;
    case 'remote':
      await mongoose.connect(process.env.MONGO_URL, {
        dbName: process.env.MONGO_DB_NAME,
      });
      console.log(
        `Mongoose connected to ${process.env.MONGO_DB_NAME} database.`
      );
      break;
    default:
      console.log({ Error: "Can't connect to database" });
  }
})();
