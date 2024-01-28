import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  url: String,
  filename: String,
});

const CampgroundSchema = new Schema({
  title: String,
  price: String,
  description: String,
  location: String,
  image: String,
  images: [ImageSchema],
});

export default mongoose.model("Campground", CampgroundSchema);
