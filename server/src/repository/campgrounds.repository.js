import Campground from '../models/Campground.js';

const all = () => Campground.find({}).lean();
const show = (id) => Campground.findById(id);

export {
  all,
  show
};
