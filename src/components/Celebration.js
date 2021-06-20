import { Card, Button } from "react-bootstrap";
import "./Celebration.css";
const Celebration = (props) => {
  return (
    <div className="cel-container">
      <Card
        style={{ width: "60%", height: "40%", margin: "auto" }}
        bg="success"
        text="white"
      >
        <Card.Header>congrats</Card.Header>
        <Card.Body>
          <Card.Title>🎉🥳🥳🎉🎉</Card.Title>
          <Card.Text>
            You solved {props.level} level puzzle in{" "}
            {props.min < 10 ? `0${props.min}` : props.min}:
            {props.sec < 10 ? `0${props.sec}` : props.sec} {"\n"}
            Now try
          </Card.Text>
          <Button
            variant="light"
            onChange={() => {
              props.newGame(0);
            }}
          >
            easy
          </Button>
          <Button
            variant="primary"
            onChange={() => {
              props.newGame(1);
            }}
          >
            medium
          </Button>
          <Button
            variant="warning"
            onChange={() => {
              props.newGame(2);
            }}
          >
            hard
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Celebration;
