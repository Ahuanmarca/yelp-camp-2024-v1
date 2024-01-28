import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function CampgroundsIndex(props) {
  const { campgrounds } = props;
  return (
    <Container>
      <h1 className="mb-3">All Campgrounds</h1>
      {campgrounds.map((c) => {
        return (
          <Card key={`camp-${c._id}`} className="mb-3" style={{ width: "100%" }}>
            <Row>
              <Col xs={4}>
                <Card.Img variant="top" src={c.image} />
              </Col>
              <Col xs={8}>
                <Card.Body>
                  <Card.Title>{c.title}</Card.Title>
                  <Card.Text>{c.description}</Card.Text>
                  <Card.Text>
                    <small className="text-muted">{c.location}</small>
                  </Card.Text>
                  <Link to={`/show/${c._id}`}>
                    <Button variant="primary">View {c.title}</Button>
                  </Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        );
      })}
    </Container>
  );
}

export default CampgroundsIndex;
