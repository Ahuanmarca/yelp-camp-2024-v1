import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CampgroundCreate() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/campgrounds/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title,
        location,
        image: imageUrl,
        price,
        description,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log({ fetched: data });
        setTitle("");
        setLocation("");
        setImageUrl("");
        setPrice("");
        setDescription("");
        // TODO: Fix problem
        // ! New campground only shows after page reload
        navigate(`/show/${data._id}`);
      });
  };

  return (
    <Row>
      <h1 className="text-center">New Campground</h1>
      <Col className="col-6 offset-3">
        <Form
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3">
            <Form.Label className="form-label" htmlFor="title">
              Title
            </Form.Label>
            <Form.Control
              type="text"
              id="title"
              name="campground[title]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="location">Location</Form.Label>
            <Form.Control
              type="text"
              id="location"
              name="campground[location]"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="image">Image Url</Form.Label>
            <Form.Control
              type="text"
              id="image"
              name="campground[image]"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="price">Campground Price</Form.Label>
            <InputGroup>
              <InputGroup.Text id="price-label">$</InputGroup.Text>
              <Form.Control
                type="text"
                id="price"
                placeholder="0.00"
                aria-label="price"
                aria-describedby="price-label"
                name="campground[price]"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              id="description"
              name="campground[description]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Button className="btn-success" type="submit">
              Add Campground
            </Button>
          </Form.Group>
        </Form>
        <Link to="/all">All Campgrounds</Link>
      </Col>
    </Row>
  );
}

export default CampgroundCreate;
