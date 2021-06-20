import { Card, Button } from "react-bootstrap";
import "./Celebration.css";
import levelTable from "./LevelTable";
const Celebration = (props) => {
  return (
    <div className="cel-container">
      <Card
        style={{ width: "80%", height: "50%", margin: "auto" }}
        bg="success"
        text="white"
      >
        <Card.Header style={{ fontSize: "3vmin", height: "6vmin" }}>
          congrats
        </Card.Header>
        <Card.Body>
          <Card.Title style={{ fontSize: "2vmin" }}>🎉🥳🥳🎉🎉</Card.Title>
          <Card.Text style={{ fontSize: "2vmin" }}>
            You solved {levelTable[props.level]} level puzzle in{" "}
            {props.min < 10 ? `0${props.min}` : props.min}:
            {props.sec < 10 ? `0${props.sec}` : props.sec} {"\n"}
            Now try
          </Card.Text>
          <Button
            variant="light"
            onClick={() => {
              props.newGame(0);
            }}
            style={{ fontSize: "2vmin", width: "10vmin", height: "5vmin" }}
          >
            easy
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.newGame(1);
            }}
            style={{ fontSize: "2vmin", width: "15vmin", height: "5vmin" }}
          >
            medium
          </Button>
          <Button
            variant="warning"
            onClick={() => {
              props.newGame(2);
            }}
            style={{ fontSize: "2vmin", width: "10vmin", height: "5vmin" }}
          >
            hard
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Celebration;
