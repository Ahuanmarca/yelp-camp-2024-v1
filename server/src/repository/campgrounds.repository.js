import Campground from '../models/Campground.js';

const all = () => Campground.find({}).lean();
const show = (id) => Campground.findById(id);

const create = async (data) => {
  const campground = new Campground(data);
  campground.image = data.image;
  campground.images = [{
    url: data.image,
    filename: "placeholderFilename",
  }];
  campground.save();
  return campground;
}

export {
  all,
  show,
  create,
};
