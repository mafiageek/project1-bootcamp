import Card from "react-bootstrap/Card";
import "./Cards.css";

export default function Cards({ country, journal }) {
  return (
    <div className="cards">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>{country}</Card.Title>
          <Card.Text>{journal}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
