import * as _ from '../repository/campgrounds.repository.js';

const all = async (req, res) => {
  const campgrounds = await _.all();
  res.send(campgrounds);
};

const show = async (req, res) => {
  const campground = await _.show(req.params.id);
  res.send(campground );
};

const create = async (req, res) => {
  const campground = await _.create(req.body);
  console.log({ created: campground });
  res.send(campground);
}

export {
  all,
  show,
  create,
};
