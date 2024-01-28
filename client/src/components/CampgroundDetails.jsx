import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function CampgroundDetails(props) {
  const { campground } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("deleting:", e.target);
  }

  return (
    <Col className="col-6 offset-3">
      <Card className="mb-3">
        <Card.Img variant="top" src={campground.image} />
        <Card.Body>
          <h5 className="card-title">{campground.title}</h5>
          <p className="card-text">{campground.description}</p>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="text-muted">{campground.location}</ListGroup.Item>
          <ListGroup.Item>$ {campground.price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to={`/campgrounds/update/${campground._id}`}>
            <Button className="card-link btn btn-info">
              Edit
            </Button>
          </Link>
          <Form
            onSubmit={handleSubmit}
            value={campground._id}
            className="d-inline"
          >
            <Button className="btn btn-danger">Delete</Button>
          </Form>
        </Card.Body>
        <div className="card-footer text-muted">2 days ago</div>
      </Card>
    </Col>
  );
}

export default CampgroundDetails;
